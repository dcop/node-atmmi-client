/**
 * @jest-environment node
 */

import { AtmClient } from "./AtmClient";
import {AxiosResponse} from "axios";
import { StopInfoDTO } from "../dto/StopInfoDTO";
import { GeoDataDTO } from "../dto/GeoDataDTO";

jest.setTimeout(10000);

describe("Atm mi client", () => {
  let client: AtmClient;

  beforeEach(() => {
    client = new AtmClient();
  });

  it('should create a new client', () => {
    expect(client).not.toBeNull();
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