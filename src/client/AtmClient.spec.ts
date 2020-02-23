/**
 * @jest-environment node
 */

import { AtmClient } from "./AtmClient";
import {AxiosResponse} from "axios";
import { StopInfo } from "../model/StopInfo";
import { GeoData } from "../model/GeoData";

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

    expect(response.data[0].Code).toBe("2975051");
  });

  it('should return geodata poi info', async () => {
    const poiCode = 2975051;

    const response: AxiosResponse<GeoData> = await client.geoDataFor(poiCode);

    expect(response.data.Code).toBe("2975051");
  });

  it('should return an object with waiting times for each line', async () => {
    const stopId = 12902;
    const response = await client.waitingMessagesFor(stopId);

    expect(response).toStrictEqual([{
      line: 53,
      waitingTimeInMinutes: 2,
      alerts: []
    },{
      line: 56,
      waitingTimeInMinutes: 3,
      alerts: ["È in programma la posa di un ponteggio in via Padova, da mercoledì 4 dicembre per 3 mesi circa, la fermata di via Padova 1 prima di piazzale Loreto, <strong>in direzione Loreto M1 M2\\piazzale Loreto,</strong> è spostata indietro di 30 metri circa, sempre in via Padova, prima del civico 3.",]
    }]);
  })
});