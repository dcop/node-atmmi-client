import { AtmClient } from "./AtmClient";
import {AxiosResponse} from "axios";
import {StopInfo} from "../model/StopInfo";
import {GeoData} from "../model/GeoData";

jest.setTimeout(10000);

describe("Atm mi client", () => {
  it('should create a new client', () => {
    const client = new AtmClient();

    expect(client).not.toBeNull();
  });

  it('should get the code for a specific stop', async () => {
    const client = new AtmClient();
    const stopId = 12902;

    const response: AxiosResponse<Array<StopInfo>> = await client.codeFor(stopId);

    expect(response.data[0].Code).toBe("2888663");
  });

  it('should return wait time for a stop', async () => {
    const client = new AtmClient();
    const poiCode = 2888663;

    const response: AxiosResponse<GeoData> = await client.geoDataFor(poiCode);

    expect(response.data.Code).toBe("2888663");
  });
});