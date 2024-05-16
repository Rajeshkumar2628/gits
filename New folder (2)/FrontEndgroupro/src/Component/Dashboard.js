import React from 'react'
import { useAuth } from './Auth'

export default function Dashboard() {
  const auth=useAuth()
  return (
    <div>
      <h1>Dashboard page</h1>
      <h3>Welcome {auth.user}</h3>
    </div>
  )
}
