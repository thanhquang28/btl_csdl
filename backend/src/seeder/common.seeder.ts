import { start } from "repl"

export const randomNumber = (length: number) => {
  return Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1))
}

export const roundToTwo = (num: number) => {
  return +(Math.round(Number(num + "e+2")) + "e-2")
}

export const randomDateOfBirth = () => {
  const start = new Date("1970-01-01")
  const end = new Date("2003-12-31")
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

export const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}
