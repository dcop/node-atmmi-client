import { GeoDataDTO } from "../../dto/GeoDataDTO";
import { WaitingMessage } from "../model/WaitingMessage";

export function toWaitingMessages(geoData: GeoDataDTO): WaitingMessage[] {
  return geoData.Lines.map(line => ({
    line: line.Line.LineCode,
    waitingTimeInMinutes: parseInt(line.WaitMessage) || 0,
    alerts: line.TrafficBulletins.map(bulletin => bulletin.Body)
  }))
}