export interface Quest1Response {
  _id: string
  name: string
  billByMonth: {
    startDate: string
    endDate: string
    totalServiceBill: number
    rentBill: number
    totalBill: number
  }[]
  totalBill: number
}
