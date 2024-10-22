'use client';
import React, { useEffect, useState } from 'react'

interface Post {
    id: number;
    title: string;
}

export const UserFetchData = () => {
    const [posts, setPosts] = useState<Post[]>([])


    useEffect(() => {
        async function userData() {
            try {
                let response = await fetch('https://api.vercel.app/blog')
                if(!response.ok) {
                    throw new Error('Network response was not ok')
                }
                let posts = await response.json()
                setPosts(posts)
                console.log('Posts fetched:', posts)
            } catch (error) {
                console.error("fatch error: ", error)
            }
    }

        userData()

    }, [])
    
    

  return (
    <ul>
        
        {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
            
    ))}
    </ul>
  )
}
