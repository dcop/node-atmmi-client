import geoData from '../geoData.json'
import { GeoDataDTO } from "../../dto/GeoDataDTO";

export class GeoDataDTOBuilder {
  static aGeoData() {
    return new GeoDataDTOBuilder()
  }

  build(): GeoDataDTO {
    return geoData;
  }
}