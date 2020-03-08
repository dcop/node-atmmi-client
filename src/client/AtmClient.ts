import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { StopInfoDTO } from "../dto/StopInfoDTO";
import { GeoDataDTO } from "../dto/GeoDataDTO";
import { toWaitingMessages, ToWaitingMessages } from "../domain/adapters/toWaitingMessages";
import { WaitingMessage } from "../domain/model/WaitingMessage";

const defaultUrl = "https://giromilano.atm.it/proxy.ashx";

export class AtmClient {

  constructor(
    private readonly url: string = defaultUrl,
    private readonly adaptToWaitingMessages: ToWaitingMessages = toWaitingMessages
  ) {
  }

  async waitingMessagesFor(stopId: number): Promise<Array<WaitingMessage>> {
    const stopInfo: AxiosResponse<Array<StopInfoDTO>> = await this.stopInfoFor(stopId);
    const geoData: AxiosResponse<GeoDataDTO> = await this.geoDataFor(Number(stopInfo.data[0].Code));

    return this.adaptToWaitingMessages(geoData.data)
  }

  async waitingMessageFor(stopId: number, line: string): Promise<Array<WaitingMessage>> {
    const waitingMessages = await this.waitingMessagesFor(stopId)

    return waitingMessages.filter(waitingMessage => waitingMessage.line === line);
  }

  private async geoDataFor(poiCode: number): Promise<AxiosResponse<GeoDataDTO>> {
    const payload = { url: `tpPortal/geodata/pois/${poiCode}/`, lang: 'it' };
    const config = { params: payload };

    return await this.callServerWith<GeoDataDTO>(config);
  }

  private async stopInfoFor(_stopId: number): Promise<AxiosResponse<Array<StopInfoDTO>>> {
    const payload = { url: `tpPortal/tpl/stops/search/${_stopId}/` };
    const config = { params: payload };

    return await this.callServerWith<Array<StopInfoDTO>>(config);
  }

  private callServerWith<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axios.post<T>(
      this.url,
      null,
      config);
  }
}