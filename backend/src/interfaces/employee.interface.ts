import { Document } from "mongoose"
import ICompany from "./company.interface"

export default interface IEmployee extends Document {
  employeeID: string
  identityCardNumber: string
  name: string
  dob: Date
  phoneNumber: string
  company: ICompany
  status: boolean
}
