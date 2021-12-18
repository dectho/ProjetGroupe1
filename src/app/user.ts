import {Guid} from "guid-typescript";

export interface User {

  id:Guid;
  pseudo:string;
  password:string;
  role:number;
  idTicket?:Guid;
}
