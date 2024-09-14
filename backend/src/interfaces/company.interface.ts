import { Document } from "mongoose"
import ITowerServices from "./towerService.interface"
import IEmployee from "./employee.interface"

export default interface ICompany extends Document {
  name: string
  taxCode: string
  capital: number
  field: string
  employeesAmount: number
  phoneNumber: string
  employees: IEmployee[]
  towerAttributes: {
    floor: number
    room: string
    size: number
    services: ITowerServices[]
    priceRate: number
  }
}
