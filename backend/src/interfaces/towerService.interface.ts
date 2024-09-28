import { Document } from "mongoose"

export default interface ITowerService extends Document {
  serviceID: string
  name: string
  type: string
  price: number
  essential: boolean
}
