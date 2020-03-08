import { Category, Details, Link, Location, TrafficBulletin } from "./StopInfoDTO";
import { Direction } from "../client/Direction";

type Line = {
  Line: {
    "LineId": string,
    "OperatorCode": string,
    "LineCode": string,
    "LineDescription": string,
    "TransportMode": number,
    "Suburban": boolean,
    "OtherRoutesAvailable": boolean,
    "Radiobus": boolean,
    "RadiobusCapolinea": boolean
  },
  "Direction": string,
  "BookletUrl": string,
  "BookletUrl2": string,
  "WaitMessage": string,
  "JourneyPatternId": string,
  "TrafficBulletins": TrafficBulletin[],
  "Links": Array<Link>
}

export interface GeoDataDTO {
  "Code": string,
  "Description": string,
  "Location": Location,
  "CustomerCode": string,
  "Municipality": string,
  "Address": string,
  "Telephone": string,
  "Fax": string,
  "SiteUrl": string,
  "Email": string,
  "Category": Category,
  "Details": Details,
  "Dynamic_First_Level": any,
  "Lines": Array<Line>,
  "Links": Array<Link>
}