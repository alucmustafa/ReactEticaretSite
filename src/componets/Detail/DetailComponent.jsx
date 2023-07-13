import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cardSlice';

const DetailComponent = ({productDetail}) => {
    const dispatch=useDispatch();
    const [quantity,setQuantity]=useState(0) ;
    const decrement=()=>{
        if(quantity>0){
            setQuantity(quantity-1)
        }
        else{
            setQuantity(0);
        }
    }
    const increment=()=>{
        if(quantity<productDetail?.rating?.count)setQuantity(quantity+1);
       
    }
    const addBasket=()=>{
        dispatch(addToCart({id:productDetail?.id,title:productDetail?.title,image:productDetail?.image,quantity:quantity,price:productDetail?.price}))
    }
  return (
    <div className='flex gap-10 my-10'>
        <img src={productDetail?.image} alt=""  className='max-w-[500px] max-h-[500px]   object-cover'/>
        <div className=''>
            <div className='text-5xl font-bold'>{productDetail?.title}</div> 
            <div className='text-md  my-2'>{productDetail?.description}</div> 
            <div className='my-3 text-lg text-red-500'>Rating:{productDetail?.rating?.rate}</div>
            <div className='my-3 text-lg text-blue-500' >count:{productDetail?.rating?.count}</div>
            <div className='text-3xl font-bold'>{productDetail?.price} <span className='text-sm'>TL</span></div>
            <div className='flex items-center justify-start gap-2 my-3'>
                <div className='flex items-center justify-center bg-gray-200 border-black w-6 h-6 rounded-full hover:bg-gray-300 hover:cursor-pointer' onClick={decrement}>-</div>
                <input type="text" value={quantity} className='w-6 text-center'/>
                <div className='flex items-center justify-center bg-gray-200 border-black w-6 h-6 rounded-full hover:bg-gray-300 hover:cursor-pointer' onClick={increment}>+</div>
            </div>
            <div onClick={addBasket} className='border-2  border-black flex items-center justify-start w-fit px-4 h-auto py-2 mx-auto rounded-lg bg-black text-white hover:bg-gray-500 hover:tracking-wide cursor-pointer'>  Sepete Ekle</div>
        </div>
    </div>
  )
}

export default DetailComponent