'use client'
import { useEffect, useState } from "react"

export const FetchAgain = () => {

    const [data, setMyData] = useState<any[]>([])

    useEffect(() => {

      const fetchData = async () => {
          try {let response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
    
          if(!response.ok) {
          throw new Error("bad input")
          }
      
          let data = await response.json()
          setMyData(data)
          }catch (error) {
          console.error("error", error)
        }
      }
      fetchData()
    }, [])

    return (
      <div>
        {data.map((d: any) => (
          <p>{d.name}</p>
        ))}
      </div>
    )
  }