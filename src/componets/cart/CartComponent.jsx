import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/cardSlice';

const CartComponent = ({cart}) => {
    const dispatch=useDispatch();

  return (
    <div className='my-10 flex items-center justify-between'> 
        <img  className='w-[150px] h-[150px] object-cover' src={cart?.image} alt="" />
        <div className='w-[350px] text-bold text-lg'>
            <div>{cart?.title}</div>
            <div >{cart?.description}</div>
        </div>
        <div>{cart?.quantity}</div>
        <div>{cart?.price} <span>TL</span></div>
        <div onClick={()=>dispatch(removeFromCart(cart?.id))} className='border-2  border-black flex items-center justify-start w-fit px-4 h-auto py-2  rounded-lg bg-red-500 text-white hover:bg-red-700 hover:tracking-wide cursor-pointer'>Ürünü Sil</div>

    </div>
  )
}

export default CartComponent