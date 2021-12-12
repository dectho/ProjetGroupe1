import {Music} from "./music";
import {Schedule} from "./schedule";
import {Guid} from "guid-typescript";

//npm i guid-typescript --save (Pour avoir le type Guid)
export interface Artist {
  id?:Guid;
  stageName:string;
  idMusic:number;
  idSchedule:number;
  music:Music;
  shchedule:Schedule;
}
