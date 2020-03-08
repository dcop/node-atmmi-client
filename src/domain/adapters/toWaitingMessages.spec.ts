import { toWaitingMessages } from "./toWaitingMessages";
import { GeoDataDTOBuilder } from "../../stubs/__builders/GeoDataDTOBuilder";
import { GeoDataLineBuilder } from "../../stubs/__builders/GeoDataLineBuilder";

describe("to waiting messages adapter", () => {
  it("with standard timing", () => {
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

  it("with incoming line", () => {
    const geoData = GeoDataDTOBuilder
      .aGeoData()
      .withLine(GeoDataLineBuilder
        .aGeoDataLine()
        .withLineCode("56")
        .withWaitMessage("In arrivo")
        .build()
      )
      .build();
    const adapted = toWaitingMessages(geoData)

    expect(adapted).toStrictEqual([{
      alerts: [],
      line: "56",
      waitingTimeInMinutes: 0
    }])
  })

  it("with alerts", () => {
    const geoData = GeoDataDTOBuilder
      .aGeoData()
      .withLine(GeoDataLineBuilder
        .aGeoDataLine()
        .withLineCode("56")
        .withWaitMessage("10 minuti")
        .withTrafficBulletin("Bla bla")
        .build()
      )
      .build();
    const adapted = toWaitingMessages(geoData)

    expect(adapted).toStrictEqual([{
      alerts: ["Bla bla"],
      line: "56",
      waitingTimeInMinutes: 10
    }])
  })
})