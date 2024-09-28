import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Quest3Response } from "./quest3.interface"
import { formatVND } from "@/utils/helper"

export default async function Page() {
  const host = process.env.HOST_API
  const res = await fetch(host + "/quest3")
  const data = (await res.json()) as Quest3Response[]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>STT</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead>Employee Name</TableHead>
          <TableHead>Salary</TableHead>
          <TableHead>Service Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((emp, index) => (
            <TableRow key={index}>
              <TableHead>{index + 1}</TableHead>
              <TableHead>
                {new Date(emp._id.startDate).toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </TableHead>
              <TableHead>
                {new Date(emp._id.endDate).toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </TableHead>
              <TableHead>{emp.employee}</TableHead>
              <TableHead>{formatVND(emp.salary)}</TableHead>
              <TableHead>{emp.serviceName.join(", ")}</TableHead>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}
