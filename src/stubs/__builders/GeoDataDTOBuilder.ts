import geoData from '../geoData.json'
import { GeoDataDTO, GeoDataLine } from "../../dto/GeoDataDTO";

export class GeoDataDTOBuilder {
  private lines: GeoDataLine[];

  constructor() {
    this.lines = [];
  }

  static aGeoData() {
    return new GeoDataDTOBuilder()
  }

  withLine(line: GeoDataLine): this {
    this.lines.push(line);

    return this
  }

  build(): GeoDataDTO {
    return {
      ...geoData,
      Lines: this.lines
    };
  }
}