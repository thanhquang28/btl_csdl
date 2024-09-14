import { model, Schema } from "mongoose"
import ITowerEmployee from "../interfaces/towerEmployee.interface"

const TowerEmployeeSchema: Schema = new Schema(
  {
    employeeID: { type: String, required: true },
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    address: { type: String, required: true },
    towerServiceRank: [
      {
        service: { type: Schema.Types.ObjectId, ref: "TowerServices" },
        level: { type: String, required: true },
        position: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default model<ITowerEmployee>("TowerEmployees", TowerEmployeeSchema)
