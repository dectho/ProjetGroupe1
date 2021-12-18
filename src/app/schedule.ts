import {Guid} from "guid-typescript";

//npm i guid-typescript --save (Pour avoir le type Guid)
export interface Schedule {
  id:Guid;
  scheduleStart:Date;
  scheduleEnd:Date;
}
