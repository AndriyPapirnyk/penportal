import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-auto p-4 bg-black text-white flex justify-between'>
        <h1>Navbar</h1>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </nav>
  )
}

export default Navbar