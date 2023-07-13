import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarLeft = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate("/")}  className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-4xl hover:cursor-pointer text-white rounded-md'>M Shop</div>
  )
}

export default NavbarLeft