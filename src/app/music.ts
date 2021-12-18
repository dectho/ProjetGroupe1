import {Guid} from "guid-typescript";

//npm i guid-typescript --save (Pour avoir le type Guid)
export interface Music {
  id?:Guid;
  title:string;
  link:string;
}
