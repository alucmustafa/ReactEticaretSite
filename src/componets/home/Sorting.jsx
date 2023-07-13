import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-300 my-5 p-2 flex items-center justify-end'>
        <select onChange={e=>setSort(e.target.value)} name="" id="" className='bg-gray-200 p-2'>
            <option disabled value="">SEÇİNİZ</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting