import {StopInfo} from "../model/StopInfo";
import axios, {AxiosResponse} from 'axios'
import {GeoData} from "../model/GeoData";

const url = "https://giromilano.atm.it/proxy.ashx";

export class AtmClient {
  private readonly url: string;

  constructor() {
    this.url = url;
  }

  async codeFor(_stopId: number): Promise<AxiosResponse<Array<StopInfo>>> {
    const payload = {url: `tpPortal/tpl/stops/search/${_stopId}/`};
    const config = { params: payload };

    return await axios.post<Array<StopInfo>>(
      this.url,
      null,
      config);
  }

  async geoDataFor(poiCode: number) {
    const payload = {url: `tpPortal/geodata/pois/${poiCode}/`, lang: 'it'};

    const config = { params: payload };

    return await axios.post<GeoData>(
      this.url,
      null,
      config);
  }
}