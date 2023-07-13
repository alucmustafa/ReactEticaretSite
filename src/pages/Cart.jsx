import React , { useEffect }from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cardSlice';
import CartComponent from '../componets/cart/CartComponent';



const Cart = () => {
 const dispatch=useDispatch();
  const {carts,totalAmount,itemCount}=useSelector(state=>state.carts);
  const navigate=useNavigate();
  
  console.log(carts,totalAmount,itemCount,"carts");
  
  useEffect(()=>{
   dispatch(getCartTotal())
  },[dispatch])
  return (
    <div>
      {
        carts?.length>0?<div>
          {
            carts?.map((cart,i)=>(
              
              <CartComponent key={i} cart={cart}/>
            ))
          }
          <div className='flex items-center justify-end text-bold text-2xl'>Toplam Tutar: <span className='ms-2 text-red-600'>{totalAmount} TL</span></div>
        </div>:
        <div>
         Sepete ürün eklemediniz.Sepet Boş....
        </div>
      }
    </div>
  )
}

export default Cart