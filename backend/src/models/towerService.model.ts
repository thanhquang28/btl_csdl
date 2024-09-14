import { model, Schema } from "mongoose"
import ITowerService from "../interfaces/towerService.interface"

const TowerServiceSchema: Schema = new Schema(
  {
    serviceID: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    maxRevenue: { type: Number },
    essential: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
)

export default model<ITowerService>("TowerServices", TowerServiceSchema)
