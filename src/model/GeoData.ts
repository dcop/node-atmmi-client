import {
  Category,
  Details,
  Line,
  Link
} from "./StopInfo";

export interface GeoData {
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
  "Dynamic_First_Level": {},
  "Lines": Array<Line>,
  "Links": Array<Link>
}