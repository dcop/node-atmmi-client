import { toWaitingMessages } from "./toWaitingMessages";
import { GeoDataDTOBuilder } from "../../stubs/__builders/GeoDataDTOBuilder";
import { GeoDataLineBuilder } from "../../stubs/__builders/GeoDataLineBuilder";

describe("to waiting messages adapter", () => {
  it("should adapt", () => {
    const geoData = GeoDataDTOBuilder
      .aGeoData()
      .withLine(GeoDataLineBuilder
        .aGeoDataLine()
        .withLineCode("56")
        .withWaitMessage("10 minuti")
        .build()
      )
      .build();
    const adapted = toWaitingMessages(geoData)

    expect(adapted).toStrictEqual([{
      alerts: [],
      line: "56",
      waitingTimeInMinutes: 10
    }])
  })
})