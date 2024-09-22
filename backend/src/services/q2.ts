import moment from "moment"
import checkCounterModel from "../models/checkCounter.model"

export const Quest2 = async (dateInput: string) => {
  if (!dateInput) {
    return "Please provide a date"
  }
  const date = moment(dateInput, "YYYY-MM-DD", true)
  if (!date.isValid()) {
    return "Invalid date format"
  }
  const checkCounterByDate = await checkCounterModel.aggregate([
    {
      $match: {
        checkTime: {
          $gte: date.startOf("day").toDate(),
          $lte: date.endOf("day").toDate(),
        },
      },
    },
    {
      $lookup: {
        from: "employees",
        localField: "employee",
        foreignField: "_id",
        as: "employee",
      },
    },
    {
      $unwind: "$employee",
    },
    {
      $lookup: {
        from: "companies",
        localField: "employee.company",
        foreignField: "_id",
        as: "company",
      },
    },
    {
      $unwind: "$company",
    },
    {
      $project: {
        _id: 0,
        type: 1,
        checkTime: 1,
        checkDestination: 1,
        employee: {
          employeeID: 1,
          name: 1,
          dob: 1,
          phoneNumber: 1,
          identityCardNumber: 1,
        },
        employeeOfCompany: "$company.name",
      },
    },
    {
      $group: {
        _id: "$employee",
        employeeOfCompany: { $first: "$employeeOfCompany" },
        employee: { $first: "$employee" },
        checkIn: {
          $sum: {
            $cond: [{ $eq: ["$type", true] }, 1, 0],
          },
        },
        checkInRecord: {
          $push: {
            $cond: [
              { $eq: ["$type", true] },
              {
                $cond: [
                  { $ne: ["$checkTime", null] },
                  {
                    checkTime: "$checkTime",
                    checkDestination: "$checkDestination",
                  },
                  "$$REMOVE",
                ],
              },
              "$$REMOVE",
            ],
          },
        },
        checkOut: {
          $sum: {
            $cond: [{ $eq: ["$type", false] }, 1, 0],
          },
        },
        checkOutRecord: {
          $push: {
            $cond: [
              { $eq: ["$type", false] },
              {
                $cond: [
                  { $ne: ["$checkTime", null] },
                  {
                    checkTime: "$checkTime",
                    checkDestination: "$checkDestination",
                  },
                  "$$REMOVE",
                ],
              },
              "$$REMOVE",
            ],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        employee: 1,
        employeeOfCompany: 1,
        checkIn: 1,
        checkOut: 1,
        checkInRecord: {
          $filter: {
            input: "$checkInRecord",
            as: "record",
            cond: { $ne: ["$$record", null] },
          },
        },
        checkOutRecord: {
          $filter: {
            input: "$checkOutRecord",
            as: "record",
            cond: { $ne: ["$$record", null] },
          },
        },
      },
    },
  ])
  return checkCounterByDate
}
