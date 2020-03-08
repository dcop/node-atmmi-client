export interface Location {
  "X": number,
  "Y": number
};

export interface Point extends Location {}

export type Category = {
  "CategoryId": string,
  "CategoryName": string,
  "HasTimeTables": boolean,
  "Icons": null
};

export type Details = {};

export type LineInfo = {
  "LineId": string,
  "OperatorCode": string,
  "LineCode": string,
  "LineDescription": string,
  "TransportMode": number,
  "Suburban": boolean,
  "OtherRoutesAvailable": boolean,
  "Radiobus": boolean,
  "RadiobusCapolinea": boolean
  "Links": Array<Link>
};

export interface TrafficBulletin {
  "Title": string,
  "Body": string,
  "PublicationDate": string // ISO,
  "ExpirationDate": string // ISO
}

export interface Link {
  "Rel": string,
  "Href": string,
  "Title": string | null
}

export type Line = {
  "Line": LineInfo,
  "Direction": string,
  "BookletUrl": string,
  "BookletUrl2": string,
  "WaitMessage": string | null,
  "JourneyPatternId": string,
  "TrafficBulletins": Array<TrafficBulletin>,
  "Links": Array<Link>
};

export interface StopInfoDTO {
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
};