"use client"

import React, { useEffect, useState } from 'react';
import { useUser } from "@clerk/clerk-react";
import axios from 'axios';

//

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

//

function Home() {
  const { user } = useUser();
  const [requestSent, setRequestSent] = useState(false);
  const [checked, setChecked] = useState(false);
  const [exists, setExists] = useState(false)

  useEffect(() => {
    if (user && !requestSent) {
      const timer = setTimeout(() => {
        const sendUserIdToServer = async () => {
          try {
            axios.post("http://localhost:8000/api/check-user", { userId: user.id })
            .then((responce) => {
              responce.data.exists ? setExists(true) : alert('User does not exist');
              setChecked(true)
            })
            .catch((error) => {
              console.log(error)
            })
            setRequestSent(true);
          } catch (error) {
            console.error("Error:", error);
          }
        };
        sendUserIdToServer();
      }, 1000); 
      return () => clearTimeout(timer);
    }
  }, [user, requestSent]); 
  return (
    <section className='bg-black flex justify-center aligh-center'>
      {checked ? (
        exists ? (
          <h1>Welcome to home page</h1>
        ) : (
          <Card className='w-[200px]'>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
}

export default Home;
