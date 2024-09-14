import { model, Schema } from "mongoose"
import IEmployee from "../interfaces/employee.interface"

const EmployeeSchema: Schema = new Schema(
  {
    employeeID: { type: String, required: true, unique: true },
    identityCardNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    phoneNumber: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: "Companies" },
    status: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
)

export default model<IEmployee>("Employees", EmployeeSchema)
