import {
  Category,
  Details,
  Line,
  Link
} from "./StopInfoDTO";

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