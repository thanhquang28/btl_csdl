import DatePickerDemo from "./pickdate"

export default async function Page() {
  const host = process.env.HOST_API
  return (
    <div>
      <DatePickerDemo inputDate={new Date()} host={host} />
    </div>
  )
}
