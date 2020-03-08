import { StopInfoDTO } from "../dto/StopInfoDTO";
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GeoDataDTO } from "../dto/GeoDataDTO";
import { Direction } from "./Direction";
import { toWaitingMessages } from "../domain/adapters/toWaitingMessages";

const url = "https://giromilano.atm.it/proxy.ashx";

export class AtmClient {
  private readonly url: string;

  constructor() {
    this.url = url;
  }

  async codeFor(_stopId: number): Promise<AxiosResponse<Array<StopInfoDTO>>> {
    const payload = { url: `tpPortal/tpl/stops/search/${_stopId}/` };
    const config = { params: payload };

    return await this.callServerWith(config);
  }

  async geoDataFor(poiCode: number): Promise<AxiosResponse<GeoDataDTO>> {
    const payload = {url: `tpPortal/geodata/pois/${poiCode}/`, lang: 'it'};

    const config = { params: payload };

    return await this.callServerWith(config);
  }

  private callServerWith<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axios.post<T>(
      this.url,
      null,
      config);
  }

  async getJourneyFor(line: number, direction: Direction = Direction.OUTBOUND): Promise<AxiosResponse<unknown>> {
    const payload = { url: `tpportal/tpl/journeyPatterns/${line}|${direction}?alternativeRoutesMode=false` }

    return await this.callServerWith(payload);
  }

  async waitingMessagesFor(stopId: number) {
    const stopInfo: AxiosResponse<Array<StopInfoDTO>> = await this.codeFor(stopId);
    const geoData: AxiosResponse<GeoDataDTO> = await this.geoDataFor(Number(stopInfo.data[0].Code));

    return toWaitingMessages(geoData.data)
  }
}