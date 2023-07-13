import React, { useState } from 'react'
import {AiOutlineSearch ,AiOutlineHeart} from 'react-icons/ai';
import{SlBasket} from 'react-icons/sl';
import { useDispatch, useSelector} from 'react-redux';
import { getCartTotal } from '../../../redux/cardSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const NavbarRigth = () => {
  const dispatch=useDispatch();
  const {carts}=useSelector(state=>state.carts);
  
  // console.log(carts,"carts")
  const navigate=useNavigate();
  const [isHidden,setIsHidden]=useState(false);

 
  useEffect(()=>{
    if(carts.length<=0){
      setIsHidden(true);
  }
  else{
    setIsHidden(false)
  }
  },[carts.length]);

  useEffect(()=>{
   dispatch(getCartTotal())
  },[dispatch])
  return (
    <div className='flex items-center gap-8'>
        <div className='flex items-center border p-3 rounded-full bg-gray-200'>
            <input type="text" className='bg-gray-200 outline-none' placeholder='Arama Yapabilirsiniz...' />
            <AiOutlineSearch size={25} />
        </div>
        <AiOutlineHeart size={25} className=' hover:cursor-pointer'/>
        <div onClick={()=>navigate("cart")} className='relative'>
            <div id='basket'   className={`${isHidden ? 'hidden' : 'flex'}  items-center justify-center text-xs absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5`} > {carts.length}</div>
            <SlBasket size={25} className='hover:cursor-pointer'/>

        </div>
    </div>
  )
}

export default NavbarRigth