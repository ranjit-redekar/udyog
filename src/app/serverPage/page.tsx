import { auth } from '@/auth'
import React from 'react'

export default async function Page() {
    const session = await auth();
    console.log(session, "AAAAAA")
  return (
    <div>Page</div>
  )
}
