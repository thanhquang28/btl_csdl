import { Document } from "mongoose"
import ITowerService from "./towerService.interface"
import ITowerEmployee from "./towerEmployee.interface"
import ICompany from "./company.interface"

export default interface ITowerServiceRecord extends Document {
  startDate: Date
  endDate: Date
  income: number
  service: ITowerService
  company: ICompany
  employees: ITowerEmployee[]
}
