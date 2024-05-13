"use client";

import { faker } from '@faker-js/faker'

export type Invoice = {
  product: string
  quantity: number
  rate: number
  tax: string
  amount: number
}

const range = (len: number) => {
  const arr: number[] = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newInvoice = (): Invoice => {
  return {
    product: faker.commerce.product(),
    quantity: faker.number.int(20),
    rate: faker.number.int(500),
    tax: "12%",
    amount: faker.number.int(100)
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Invoice[] => {
    const len = lens[depth]!
    return range(len).map((d): Invoice => {
      return {
        ...newInvoice()
      }
    })
  }

  return makeDataLevel()
}
