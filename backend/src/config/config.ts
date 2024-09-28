export const PORT = process.env.PORT || 8080

export const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/thanhlq"

export const UNIT_PRICE = 500000 // 500k vnd / 1m2

export const SALARY_BASE = 5000000 // 5m vnd
export const SalaryRate = {
  Staff_1: 0.05,
  Staff_2: 0.1,
  Staff_3: 0.15,
  Assistant_1: 0.2,
  Assistant_2: 0.25,
  Assistant_3: 0.3,
  Manager_1: 0.35,
  Manager_2: 0.4,
  Manager_3: 0.45,
}
