import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`products/${product?.id}`)} className='w-[305px] p-3 m-2 boder-black rounded-md bg-gray-200 relative cursor-pointer'> 
       <div className='text-2xl py-1 px-2 font-bold absolute rounded-md top-1 right-1 bg-red-600 text-white'>{product?.price}<span className='text-sm ms-1'>TL</span></div>
       <img src={product?.image} alt="" className='w-[200px] h-[200px] object-cover m-auto'/>
       <div className='text-center px-3 mt-3 text-xl font-bold'>{product?.title} </div>
    </div>
  )
}

export default Product