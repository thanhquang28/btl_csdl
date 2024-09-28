"use client"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatVND } from "@/utils/helper"
import { ChevronsDown } from "lucide-react"
import { Quest1Response } from "./quest1.interface"

export const Quest1TableBody = ({
  company,
  index,
}: {
  company: Quest1Response
  index: number
}) => {
  return (
    <Collapsible key={company._id} asChild>
      <>
        <TableRow>
          <TableCell className="font-medium">{index + 1}</TableCell>
          <TableCell>{company.name}</TableCell>
          <TableCell>{formatVND(company.totalBill)}</TableCell>
          <TableCell className="text-right">
            <CollapsibleTrigger>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </TableCell>
        </TableRow>
        <TableCell colSpan={12}>
          <CollapsibleContent className="w-full">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>StartDate</TableHead>
                  <TableHead>EndDate</TableHead>
                  <TableHead>Rent Bill</TableHead>
                  <TableHead>Service Bill</TableHead>
                  <TableHead className="text-right">Rent + Service</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {company.billByMonth.map((bill, billIndex) => (
                  <TableRow key={billIndex}>
                    <TableCell>
                      {new Date(bill.startDate).toLocaleDateString("vi-VN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell>
                      {new Date(bill.endDate).toLocaleDateString("vi-VN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell>{bill.rentBill}</TableCell>
                    <TableCell>{bill.totalServiceBill}</TableCell>
                    <TableCell className="text-right">
                      {formatVND(bill.totalBill)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CollapsibleContent>
        </TableCell>
      </>
    </Collapsible>
  )
}
