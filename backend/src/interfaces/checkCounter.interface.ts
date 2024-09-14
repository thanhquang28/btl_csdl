import { Document } from "mongoose"
import IEmployee from "./employee.interface"

export enum ECheckDestination {
  F1 = "F1",
  B1 = "B1",
  B2 = "B2",
}

export default interface ICheckCounter extends Document {
  type: boolean // true for check in, false for check out
  employee: IEmployee
  checkTime: Date
  checkDestination: ECheckDestination
}
