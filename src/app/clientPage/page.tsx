"use client";
import { useSession } from 'next-auth/react'
import React from 'react'

export default function Page() {
    const session = useSession();
  return (
    <div>
      {
        session?.status === "authenticated" ? 
        <div>{session?.data?.user?.name} you are logged in </div>
        : <div className='text-red-500' >This client rout is protected</div>
      }
    </div>
  )
}
