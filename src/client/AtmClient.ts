import {StopInfo} from "../model/StopInfo";
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {GeoData} from "../model/GeoData";
import {Direction} from "./Direction";

const url = "https://giromilano.atm.it/proxy.ashx";

export class AtmClient {
  private readonly url: string;

  constructor() {
    this.url = url;
  }

  async codeFor(_stopId: number): Promise<AxiosResponse<Array<StopInfo>>> {
    const payload = {url: `tpPortal/tpl/stops/search/${_stopId}/`};
    const config = { params: payload };

    return await this.callServerWith(config);
  }

  async geoDataFor(poiCode: number): Promise<AxiosResponse<GeoData>> {
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

  async getJourneyFor(line: number, direction: Direction): Promise<AxiosResponse<unknown>> {
    const payload = { url: `tpportal/tpl/journeyPatterns/${line}|${direction}?alternativeRoutesMode=false` }

    return await this.callServerWith(payload);
  }
}