import CompanyModel from "../models/company.model"
import EmployeeModel from "../models/employee.model"
import TowerEmployeeModel from "../models/towerEmployee.model"
import TowerServiceModel from "../models/towerService.model"
import TowerServiceRecordModel from "../models/towerServiceRecord.model"
import CheckCounterModel from "../models/checkCounter.model"
import { getCompanySeed } from "./company.seed"
import { getEmployeeSeed } from "./employee.seed"
import { getTowerEmployeeSeed } from "./towerEmployee.seed"
import { TowerServiceSeed } from "./towerService.seed"
import { getTowerServiceRecordSeed } from "./towerServiceRecord.seed"
import { getCheckCounterSeed } from "./checkCounterseed"

const Seeder = async () => {
  // save TowerServiceSeed to database
  if ((await TowerServiceModel.find()).length === 0) {
    await TowerServiceModel.insertMany(TowerServiceSeed)
  }

  if ((await EmployeeModel.find()).length === 0) {
    const employee = getEmployeeSeed()
    await EmployeeModel.insertMany(employee)
  }

  if ((await CompanyModel.find()).length === 0) {
    await getCompanySeed()
    // await CompanyModel.insertMany(company)
  }

  if ((await TowerEmployeeModel.find()).length === 0) {
    const towerEmployee = await getTowerEmployeeSeed()
    await TowerEmployeeModel.insertMany(towerEmployee)
  }

  if ((await TowerServiceRecordModel.find()).length === 0) {
    const towerServiceRecord = await getTowerServiceRecordSeed()
    await TowerServiceRecordModel.insertMany(towerServiceRecord)
  }

  if ((await CheckCounterModel.find()).length === 0) {
    const checkCounter = await getCheckCounterSeed()
    await CheckCounterModel.insertMany(checkCounter)
  }
}

export default Seeder

export const DropCollections = async () => {
  await CompanyModel.deleteMany({})
  await TowerEmployeeModel.deleteMany({})
  await TowerServiceModel.deleteMany({})
  await TowerServiceRecordModel.deleteMany({})
  await EmployeeModel.deleteMany({})
  await CheckCounterModel.deleteMany({})
}
