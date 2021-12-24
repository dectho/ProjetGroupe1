import {Guid} from "guid-typescript";

export interface Ticket {
  id:Guid;
  edition : string;
  nom : string;
}
