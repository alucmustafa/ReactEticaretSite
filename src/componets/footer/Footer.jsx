import React from 'react'
import {BsFacebook ,BsTwitter,BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='flex items-center justify-between w-1/1 h-[200px] bg-gray-200 rounded-3xl'>
       <div className='flex '>
           <div className= 'flex  justify-start w-[450px] p-3 mt-3 text-bold text-2xl  text-red-600'>iletişim: <div className='text-xl text-bold text-black ms-2'>+90 55555555555</div></div>
           <div className='w-[450px] h-[80px] px-4' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro enim ratione, nulla dignissimos provident saepe numquam incidunt.</div>
       </div>
       <div className='flex items-start text-3xl gap-4 me-4' >  <BsFacebook className='cursor-pointer hover:text-red-600'/><BsTwitter className='cursor-pointer hover:text-red-600'/><BsInstagram className='cursor-pointer hover:text-red-600'/></div>
    </div>

  )
}

export default Footer