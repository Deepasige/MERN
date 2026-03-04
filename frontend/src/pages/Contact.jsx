import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
const Contact = () => {

  const [users, setUsers] = useState([])
  const fetchData=async()=>{
    try{
      const res=await axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
      setUsers(res.data)
    }catch(error){
      console.log('Error',error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h4>userId: {user.userId}</h4>
          <h4>Id: {user.id}</h4>
          <h4>Title: {user.title}</h4>
          <h4>body: {user.body}</h4>
        </div>
      ))}

    </div>
  )
}

export default Contact