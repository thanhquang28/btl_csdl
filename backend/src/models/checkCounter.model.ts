import { Schema, model } from "mongoose"
import ICheckCounter from "../interfaces/checkCounter.interface"

const CheckCounterSchema: Schema = new Schema(
  {
    type: {
      type: Boolean,
      required: true,
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employees",
      required: true,
    },
    checkTime: {
      type: Date,
      required: true,
    },
    checkDestination: {
      type: String,
      required: true,
      enum: ["F1", "B1", "B2"],
    },
  },
  {
    timestamps: true,
  }
)

export default model<ICheckCounter>("CheckCounters", CheckCounterSchema)
