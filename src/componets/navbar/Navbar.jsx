import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRigth from './navbarItem/NavbarRigth'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between my-3'>
        <NavbarLeft/>
        <NavbarRigth/>

    </div>
  )
}

export default Navbar