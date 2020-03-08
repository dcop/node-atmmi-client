import { GeoDataLine } from "../../dto/GeoDataDTO";
import geoData from '../geoData.json'
import { TrafficBulletin } from "../../dto/StopInfoDTO";

export class GeoDataLineBuilder {
  private waitMessage: string;
  private lineCode: string;
  private bulletins: TrafficBulletin[];

  constructor() {
    this.bulletins = []
  }

  static aGeoDataLine() {
    return new GeoDataLineBuilder()
  }

  withWaitMessage(msg: string): this {
    this.waitMessage = msg;

    return this
  }

  withLineCode(code: string): this {
    this.lineCode = code;

    return this;
  }

  withTrafficBulletin(bulletin: string): this {
    this.bulletins.push({
      Body: bulletin,
      ExpirationDate: null,
      PublicationDate: null,
      Title: "A_TITLE"
    });

    return this
  }

  build(): GeoDataLine {
    return {
      ...geoData.Lines[0],
      WaitMessage: this.waitMessage,
      Line: {
        ...geoData.Lines[0].Line,
        LineCode: this.lineCode
      },
      TrafficBulletins: this.bulletins
    }
  }
}