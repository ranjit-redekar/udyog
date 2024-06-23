"use server";

import prisma from "./lib/db";

export async function createUser(data:any) {
    console.log(data, "AAAAAA - Data")
    return prisma.user.create({
        data: { ...data }
    })
}

export async function getUsers(type?:string) {
    console.log(type, "AAAAAA - Data")
    if (type === 'both') {
        return prisma.user.findMany();        
    }
    return prisma.user.findMany({
        where: { type }
    });
}
