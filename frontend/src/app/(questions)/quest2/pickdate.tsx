"use client"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import axios from "axios"
import { Quest2Response } from "./quest2.interface"

export default function DatePickerDemo({
  inputDate,
  host,
}: {
  inputDate: Date | undefined
  host: string | undefined
}) {
  const [date, setDate] = React.useState<Date | undefined>(inputDate)
  const [data, setData] = React.useState<Quest2Response[]>([])

  React.useEffect(() => {
    if (!date || !host) return
    callApi(date.toISOString().split("T")[0], host)
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [date, host])

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">STT</TableHead>
            <TableHead>Employee Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((emp, index) => (
              <TableRow key={index}>
                <TableHead>{index + 1}</TableHead>
                <TableHead>{emp.employee.name}</TableHead>
                <TableHead>{emp.employeeOfCompany}</TableHead>
                <TableHead>
                  {emp.checkInRecord.map((record, i) => (
                    <span key={i}>
                      {record.checkDestination} -{" "}
                      {format(new Date(record.checkTime), "HH:mm:ss")}
                    </span>
                  ))}
                </TableHead>
                <TableHead>
                  {emp.checkOutRecord.map((record, i) => (
                    <span key={i}>
                      {record.checkDestination} -{" "}
                      {format(new Date(record.checkTime), "HH:mm:ss")}
                    </span>
                  ))}
                </TableHead>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}

const callApi = async (date: string, host: string) => {
  const res = await axios.get<Quest2Response[]>(host + "/quest2?date=" + date)
  return res.data
}
