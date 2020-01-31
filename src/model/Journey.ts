import {LineInfo, Link, Point} from "./StopInfo";

export interface Stop {
  "OperatorCode": string,
  "Code": string,
  "Description": string,
  "Location": Location,
  "PointType": number,
  "OtherLines": Array<any>,
  "StopType": string,
  "Links": Array<Link>
}

export interface Segment {
  "RGB": string,
  "Points": Array<Point>
}

export interface Journey {
  "Id": string,
  "Code": string,
  "Direction": string,
  "Line": LineInfo,
  "Stops": Array<Stop>,
  "Geometry": {
    "Segments": Array<Segment>,
    "BoundingBox_NE": Point,
    "BoundingBox_SW": Point
  },
  "Links": Array<Link>
}