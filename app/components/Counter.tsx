'use client'
import { useEffect, useState } from 'react'

export const Counter = () => {

    const [count, setCount] = useState(0)

    console.log("Counter component rendering");

    useEffect(() => {
        
       console.log("Component mount")
       const timerId = setInterval( () => {
        setCount((prevCoun) => prevCoun + 1)
       }, 1000)

       return () => {
        clearInterval(timerId)
       console.log("Component unmount")
    }

    },[])

  return (
    <div>Counter: {count}</div>
  )
}





