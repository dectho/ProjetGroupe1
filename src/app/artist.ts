import {Music} from "./music";
import {Schedule} from "./schedule";
import {Guid} from "guid-typescript";

//npm i guid-typescript --save (Pour avoir le type Guid)
export interface Artist {
  id?:Guid;
  stageName:string;
  idMusic:Guid;
  idSchedule:Guid;
  music:Music;
  schedule:Schedule;
}
