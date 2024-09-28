import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Quest1Response } from "./quest1.interface"

import { Quest1TableBody } from "./tablebody"
import { formatVND } from "@/utils/helper"

export default async function Page() {
  // fetch data from an API
  const host = process.env.HOST_API
  const res = await fetch(host + "/quest1")
  const data = (await res.json()) as Quest1Response[]
  return (
    <div className="container">
      <h1 className="text-2xl">Thống kê</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">STT</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((company, index) => (
              <Quest1TableBody
                key={company._id}
                company={company}
                index={index}
              />
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              {formatVND(
                data.reduce((acc, company) => acc + company.totalBill, 0)
              )}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
