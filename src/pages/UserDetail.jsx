import React from 'react'
import UserInfo from '../components/UserInfo'
import UserMedia from '../components/UserMedia'
import { Outlet } from 'react-router-dom'

const UserDetail = () => {
 

  return (
    <div className='container  max-w-screen flex flex-col mx-auto my-6 p-9 gap-3'>
      <UserInfo/>
      <UserMedia/>
      <Outlet/>
      
    </div>
  )
}

export default UserDetail
