import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'

const PersonalInformation = () => {
  return (
    <div>
        <p>personal info</p>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </div>
  )
}

export default PersonalInformation