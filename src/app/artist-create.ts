import {Guid} from "guid-typescript";
import {Music} from "./music";
import {Schedule} from "./schedule";

export interface ArtistCreate {
  id?:Guid;
  stageName:string;
  music : Music ;
  schedule : Schedule ;
}
