import { randomDateOfBirth, randomNumber } from "./common.seeder"

const NUMBER_OF_EMPLOYEES = 1200

export const getEmployeeSeed = () => {
  return Array.from({ length: NUMBER_OF_EMPLOYEES }).map((_, i) => {
    const employeeID = `EMP${i + 1}`
    const identityCardNumber = randomNumber(12)
    const name = `Employee ${i + 1}`
    const dob = randomDateOfBirth()
    const phoneNumber = randomNumber(10)
    const status = true

    return {
      employeeID,
      identityCardNumber,
      name,
      dob,
      phoneNumber,
      status,
    }
  })
}
