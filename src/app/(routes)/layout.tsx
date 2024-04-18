import React from 'react'
import { MainNav } from '../(components)/main-nav';

export default function RouteLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
        <MainNav />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            {children}
        </main>
    </div>
  )
}
