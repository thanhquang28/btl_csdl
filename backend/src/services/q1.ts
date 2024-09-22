import { UNIT_PRICE } from "../config/config"
import CompanyModel from "../models/company.model"

export const Quest1 = async () => {
  const companies = await CompanyModel.aggregate([
    {
      $unset: ["createdAt", "updatedAt", "employees"],
    },
    {
      $lookup: {
        from: "towerservicerecords",
        let: { company: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$company", "$$company"],
              },
            },
          },
          {
            $group: {
              _id: {
                startDate: "$startDate",
                endDate: "$endDate",
              },
              totalServiceBill: {
                $sum: "$income",
              },
            },
          },
          {
            $sort: {
              "_id.startDate": 1,
              "_id.endDate": 1,
            },
          },
        ],
        as: "serviceRecords",
      },
    },
    {
      $project: {
        name: 1,
        billByMonth: {
          $map: {
            input: "$serviceRecords",
            as: "record",
            in: {
              startDate: "$$record._id.startDate",
              endDate: "$$record._id.endDate",
              totalServiceBill: "$$record.totalServiceBill",
              rentBill: {
                $multiply: ["$towerAttributes.size", UNIT_PRICE],
              },
              totalBill: {
                $add: [
                  "$$record.totalServiceBill",
                  { $multiply: ["$towerAttributes.size", UNIT_PRICE] },
                ],
              },
            },
          },
        },
        totalBill: {
          $sum: {
            $map: {
              input: "$serviceRecords",
              as: "record",
              in: {
                $add: [
                  "$$record.totalServiceBill",
                  { $multiply: ["$towerAttributes.size", UNIT_PRICE] },
                ],
              },
            },
          },
        },
      },
    },
    {
      $sort: {
        totalBill: -1,
      },
    },
  ])
  return companies
}
