import { GeoDataLine } from "../../dto/GeoDataDTO";
import geoData from '../geoData.json'

export class GeoDataLineBuilder {
  private waitMessage: string;
  private lineCode: string;

  constructor() {
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

  build(): GeoDataLine {
    return {
      ...geoData.Lines[0],
      WaitMessage: this.waitMessage,
      Line: {
        ...geoData.Lines[0].Line,
        LineCode: this.lineCode
      }
    }
  }
}