"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Provider({children}: { children: ReactNode}) {
  return (
    <>
      <ToastContainer />
      <SessionProvider>{children}</SessionProvider>
    </>
  )
}
