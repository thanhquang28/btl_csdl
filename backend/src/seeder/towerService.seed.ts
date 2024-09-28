import { randomNumber } from "./common.seeder"

const HOUSE_HOLD = "Household"
const COMMERCIAL = "Commercial"

export const TowerServiceSeed = [
  {
    serviceID: "1",
    name: "Security",
    type: HOUSE_HOLD,
    price: randomNumber(7),
    essential: true,
  },
  {
    serviceID: "2",
    name: "Cleaning",
    type: HOUSE_HOLD,
    price: randomNumber(7),
    essential: true,
  },
  {
    serviceID: "3",
    name: "Repair",
    type: HOUSE_HOLD,
    price: randomNumber(7),
    essential: false,
  },
  {
    serviceID: "4",
    name: "Gardening",
    type: HOUSE_HOLD,
    price: randomNumber(7),
    essential: false,
  },
  {
    serviceID: "5",
    name: "Advertising",
    type: COMMERCIAL,
    price: randomNumber(7),
    essential: false,
  },
]
