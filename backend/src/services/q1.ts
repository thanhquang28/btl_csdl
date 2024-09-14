import CompanyModel from "../models/company.model"

export const Quest1 = async () => {
  const companies = await CompanyModel.find({})
    .populate("towerAttributes.services")
    .exec()
  return companies
}
