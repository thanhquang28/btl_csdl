import { model, Schema } from "mongoose"
import ITowerService from "../interfaces/towerService.interface"

const TowerServiceRecordSchema: Schema = new Schema(
  {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    income: { type: Number, required: true },
    service: { type: Schema.Types.ObjectId, ref: "TowerServices" },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    employees: [{ type: Schema.Types.ObjectId, ref: "TowerEmployees" }],
  },
  {
    timestamps: true,
  }
)

export default model<ITowerService>(
  "TowerServiceRecords",
  TowerServiceRecordSchema
)
