"use server";

import prisma from "./lib/db";

export async function createUser(data:any) {
    console.log(data, "AAAAAA - Data")
    return prisma.user.create({
        data: { ...data }
    })
}
