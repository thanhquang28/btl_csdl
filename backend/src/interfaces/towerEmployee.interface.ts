import { Document } from "mongoose"
import ITowerService from "./towerService.interface"

export default interface ITowerEmployee extends Document {
  employeeID: string
  name: string
  dob: Date
  address: string
  towerServiceRank: {
    service: ITowerService
    level: string
    position: string
  }[]
}
