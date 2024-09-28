export interface Quest2Response {
  employeeOfCompany: string
  employee: {
    employeeID: string
    identityCardNumber: string
    name: string
    dob: string
    phoneNumber: string
  }
  checkIn: number
  checkOut: number
  checkInRecord: {
    checkTime: string
    checkDestination: string
  }[]
  checkOutRecord: {
    checkTime: string
    checkDestination: string
  }[]
}
