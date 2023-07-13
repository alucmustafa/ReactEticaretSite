import React, { useState } from 'react'
import SliderComponent from '../componets/home/SliderComponent'
import Sorting from '../componets/home/Sorting'
import Category from '../componets/home/Category'
import Products from '../componets/home/Products'
import Footer from '../componets/footer/Footer'


const Home = () => {

  const [sort,setSort]=useState('');
  const [category,setCategory]=useState('');


  return (
    <div>
      <SliderComponent/>
       <Sorting setSort={setSort}/>
       <div className='flex '>
          <Category setCategory={setCategory}/>
          <Products category ={category} sort={sort}/>
        </div> 
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Home