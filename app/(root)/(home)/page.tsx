"use client"

import { SignedIn, UserButton } from "@clerk/nextjs";
import axios from "axios";
import { useState } from "react";

export default function Home() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('')

  const submitData = () => {
    axios.post('http://localhost:8000/api/auth', {
      name: name,
      password: password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <main className="w-full h-full bg-black flex gap-2 p-4">
     <input className="rounded text-black" type="text" placeholder="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
     <input className="rounded text-black" type="text" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
     <button className="text-white" onClick={submitData}>Send</button>
     <SignedIn>
        <UserButton/>
     </SignedIn>
    </main>
  );
}
