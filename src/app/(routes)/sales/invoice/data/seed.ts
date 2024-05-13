import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

import { labels, priorities, statuses } from "./data"

export const getInvoice = () => {
  return Array.from({ length: 100 }, () => ({
    id: `XYZ-${faker.number.int({ min: 1000, max: 9999 })}`,
    customer: faker.person.fullName(),
    email: faker.internet.email(),
    status: faker.helpers.arrayElement(statuses).value,
    label: faker.helpers.arrayElement(labels).value,
    priority: faker.helpers.arrayElement(priorities).value,
    invoiceDate: faker.date.past(),
  }))
}
