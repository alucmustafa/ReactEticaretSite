import React from 'react'
import Slider from 'react-slick';



const SliderComponent = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1};
  return (
    <div className='mt-5'>
   <Slider {...settings}>
          <div className='!flex items-center gap-2 mt-4 px-5 py-10 bg-gray-200 h-96 rounded-xl'>
            <div className='relative ' >
                <h2 className='text-6xl font-bold bg-img pb-4'>Son model Laptoplar</h2>
                <div className='pb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio facere dolor temporibus eius est quos omnis eveniet quia voluptate vero nam, quibusdam, corporis aliquid obcaecati! Hic ut officiis reprehenderit modi?</div>
                <div className='border-2  border-black flex items-center justify-center w-fit px-4 h-auto py-2 mx-auto rounded-lg bg-black text-white hover:bg-gray-500 hover:tracking-wide
                 cursor-pointer '>Haydi Dene</div>  
                 
             </div>
             <img src="img/slider1.jpg" alt="" className='w-96 h-72 rounded-xl'  />     
            
          </div>
          <div className='!flex items-center gap-2 mt-4 px-5 py-10 bg-gray-200 h-96 rounded-xl'>
            <div className='relative ' >
                <h2 className='text-6xl font-bold bg-img pb-4'>2+1 yıl garanti süresi</h2>
                <div className='pb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio facere dolor temporibus eius est quos omnis eveniet quia voluptate vero nam, quibusdam, corporis aliquid obcaecati! Hic ut officiis reprehenderit modi?</div>
                <div className='border-2 border-black flex items-center justify-center w-fit px-4 h-auto py-2 mx-auto rounded-lg bg-black text-white hover:bg-gray-500 hover:tracking-wide
                 cursor-pointer '>Haydi Dene</div>  
                 
             </div>
             <img src="img/slider2.jpg" alt="" className='w-96 h-72 rounded-xl'  />     
            
          </div>
          <div className='!flex items-center gap-2 mt-4 px-5 py-10 bg-gray-200 h-96 rounded-xl'>
            <div className='relative ' >
                <h2 className='text-6xl font-bold bg-img pb-4'>Gel Götür incele Getir </h2>
                <div className='pb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio facere dolor temporibus eius est quos omnis eveniet quia voluptate vero nam, quibusdam, corporis aliquid obcaecati! Hic ut officiis reprehenderit modi?</div>
                <div className='border-2 border-black flex items-center justify-center w-fit h-auto px-3 py-2 mx-auto rounded-lg bg-black text-white hover:bg-gray-500 hover:tracking-wide
                 cursor-pointer '>Haydi Dene</div>  
                 
             </div>
             <img src="img/slider3.jpg" alt="" className='w-96 h-72 rounded-xl'  />     
            
          </div>
          
    </Slider>
    </div>
  )
}

export default SliderComponent