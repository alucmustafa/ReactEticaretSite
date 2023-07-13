import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/CategorySlice';

const Category = ({setCategory}) => {
    const dispatch=useDispatch();
    const {categories}=useSelector(state=>state.categories)


    console.log(categories,"categories");

    useEffect(()=>{
    dispatch(getCategories())
    },[dispatch])
  return (
    <div className='w-2/7 mt-2 max-h-[340px] bg-gray-200 p-4'> 
       <div className='boder-b pb-2 text-xl font-bold'>Kategori</div>
       {
         categories?.map((category,i)=>(
            <div key={i} onClick={()=>setCategory(category)} className='text-blue-800 text-lg mt-1 py-2 pr-2 cursor-pointer hover:bg-gray-100 hover:text-gray-600'>{category}</div>

         ))

       }

        </div>
  )
}

export default Category