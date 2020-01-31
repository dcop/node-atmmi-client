import { AtmClient } from "./AtmClient";
import {AxiosResponse} from "axios";
import { StopInfo } from "../model/StopInfo";
import { GeoData } from "../model/GeoData";
import {Direction} from "./Direction";

jest.setTimeout(10000);

describe("Atm mi client", () => {
  let client: AtmClient;

  beforeEach(() => {
    client = new AtmClient();
  });

  it('should create a new client', () => {
    expect(client).not.toBeNull();
  });

  it('should get the specific stop', async () => {
    const stopId = 12902;

    const response: AxiosResponse<Array<StopInfo>> = await client.codeFor(stopId);

    expect(response.data[0].Code).toBe("2943446");
  });

  it('should return geodata poi info', async () => {
    const poiCode = 2943446;

    const response: AxiosResponse<GeoData> = await client.geoDataFor(poiCode);

    expect(response.data.Code).toBe("2943446");
  });
});