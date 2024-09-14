import { ObjectId } from "mongoose"
import ICompany from "../interfaces/company.interface"
import CompanyModel from "../models/company.model"
import TowerEmployee from "../models/towerEmployee.model"
import { roundToTwo } from "./common.seeder"

export const getTowerServiceRecordSeed = async () => {
  const seeds: any[] = []
  const companies = (await CompanyModel.find()
    .populate("towerAttributes.services")
    .exec()) as ICompany[]
  for (const dateTime of dateTimeHelper) {
    for (const company of companies) {
      const services = company.towerAttributes.services
      for (const service of services) {
        const serviceId = service._id as ObjectId
        const randomEmployees = await TowerEmployee.aggregate([
          { $match: { "towerServiceRank.service": serviceId } },
          { $sample: { size: 3 } },
        ])

        seeds.push({
          startDate: dateTime.startDate,
          endDate: dateTime.endDate,
          income: roundToTwo(service.price * company.towerAttributes.priceRate),
          service: serviceId,
          company: company._id,
          employees: randomEmployees,
        })
      }
    }
  }

  return seeds
}

const dateTimeHelper = [
  {
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
  },
  {
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-02-29"),
  },
  {
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-31"),
  },
  {
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-04-30"),
  },
  {
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-05-31"),
  },
  {
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-06-30"),
  },
  {
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-07-31"),
  },
  {
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-08-31"),
  },
  {
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-09-30"),
  },
]
