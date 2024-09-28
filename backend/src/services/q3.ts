import { PipelineStage } from "mongoose"
import { SALARY_BASE, SalaryRate } from "../config/config"
import towerServiceRecordModel from "../models/towerServiceRecord.model"

export const Quest3 = async () => {
  const pipeline: PipelineStage[] = [
    {
      $lookup: {
        from: "toweremployees",
        localField: "employees",
        foreignField: "_id",
        as: "employees",
      },
    },
    {
      $unwind: "$employees",
    },
    {
      $lookup: {
        from: "towerservices",
        localField: "service",
        foreignField: "_id",
        as: "service",
      },
    },
    {
      $unwind: "$service",
    },
    {
      $addFields: {
        employeeServiceRank: {
          $arrayElemAt: [
            {
              $filter: {
                input: "$employees.towerServiceRank",
                as: "rank",
                cond: {
                  $eq: ["$$rank.service", "$service._id"],
                },
              },
            },
            0,
          ],
        },
        employeeName: "$employees.name",
        employee: "$employees._id",
      },
    },
    {
      $addFields: {
        employeeRank: {
          $concat: [
            "$employeeServiceRank.position",
            "_",
            "$employeeServiceRank.level",
          ],
        },
      },
    },
    {
      $unset: ["employees"],
    },
    {
      $addFields: {
        salary: {
          $cond: {
            if: { $lt: ["$income", "$targetIncome"] },
            then: SALARY_BASE,
            else: {
              $sum: [
                SALARY_BASE,
                {
                  $multiply: [
                    {
                      $subtract: ["$income", "$targetIncome"],
                    },
                    {
                      $switch: {
                        branches: [
                          {
                            case: { $eq: ["$employeeRank", "Staff_1"] },
                            then: SalaryRate.Staff_1,
                          },
                          {
                            case: { $eq: ["$employeeRank", "Staff_2"] },
                            then: SalaryRate.Staff_2,
                          },
                          {
                            case: { $eq: ["$employeeRank", "Staff_3"] },
                            then: SalaryRate.Staff_3,
                          },
                          {
                            case: { $eq: ["$employeeRank", "Assistant_1"] },
                            then: SalaryRate.Assistant_1,
                          },
                          {
                            case: { $eq: ["$employeeRank", "Assistant_2"] },
                            then: SalaryRate.Assistant_2,
                          },
                          {
                            case: { $eq: ["$employeeRank", "Assistant_3"] },
                            then: SalaryRate.Assistant_3,
                          },
                          {
                            case: { $eq: ["$employeeRank", "Manager_1"] },
                            then: SalaryRate.Manager_1,
                          },
                          {
                            case: { $eq: ["$employeeRank", "Manager_2"] },
                            then: SalaryRate.Manager_2,
                          },
                          {
                            case: { $eq: ["$employeeRank", "Manager_3"] },
                            then: SalaryRate.Manager_3,
                          },
                        ],
                        default: 0,
                      },
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    {
      $group: {
        _id: {
          startDate: "$startDate",
          endDate: "$endDate",
          employee: "$employee",
        },
        employee: {
          $first: "$employeeName",
        },
        salary: {
          $sum: "$salary",
        },
        serviceName: {
          $addToSet: "$service.name",
        },
      },
    },
    {
      $sort: {
        "_id.startDate": 1,
        "_id.endDate": 1,
      },
    },
  ]
  const records = await towerServiceRecordModel.aggregate(pipeline)
  return records
}
