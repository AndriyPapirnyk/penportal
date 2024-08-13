import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

const HomeLayout = ({ children } : {children: ReactNode}) => {
  return (
    <main className='relative size-full'>
        <Navbar />
        {children}
    </main>
  )
}

export default HomeLayout