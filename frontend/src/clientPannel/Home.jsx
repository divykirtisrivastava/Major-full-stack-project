import React, { useEffect, useState } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench, ShoppingBag } from 'lucide-react'
import axios from 'axios'

export default function Home() {
    let [data, setData] = useState([])

    async function getData(){
        let result = await axios.get('http://localhost:3000/api/getProduct')
        setData(result.data)
    }
    useEffect(()=>{
        getData()
    }, [])
 async function filterShoes(){
  let result = await axios.get('http://localhost:3000/api/getProduct')
  let final = result.data.filter((item)=> item.productType == "shoes")
  setData(final)
}
 async function filterShirt(){
  let result = await axios.get('http://localhost:3000/api/getProduct')
  let final = result.data.filter((item)=> item.productType == "shirt")
  setData(final)
}
 async function filterbtwSeven(){
  let result = await axios.get('http://localhost:3000/api/getProduct')
  let final = result.data.filter((item)=> item.productPrice >=1000 && item.productPrice <= 7000)
  setData(final)
}
  return (
    <>
    <aside className="flex fixed h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
   
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xl font-semibold uppercase text-white">Fiter By Type</label>
            <button
            onClick={getData}
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="#"
            >
              <span className="mx-2 text-xl font-medium">All</span>
            </button>
            <button
            onClick={filterShoes}
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="#"
            >
              <span className="mx-2 text-xl font-medium">Shoes</span>
            </button>
            <button
            onClick={filterShirt}
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="#"
            >
              <span className="mx-2 text-xl font-medium">Shirt</span>
            </button>
           
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xl font-semibold uppercase text-white">Fiter By Price Range</label>
            <button
            onClick={filterbtwSeven}
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="#"
            >
              <span className="mx-2 text-xl font-medium">1000 - 7000Rs</span>
            </button>
            <button
            onClick={filterShoes}
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="#"
            >
              <span className="mx-2 text-xl font-medium">Shoes</span>
            </button>
            <button
            onClick={filterShirt}
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="#"
            >
              <span className="mx-2 text-xl font-medium">Shirt</span>
            </button>
           
          </div>
       
        </nav>
      </div>
    </aside>

    <div className="card absolute left-[300px] top-[80px] flex gap-[20px] flex-wrap">
    {data.map((data)=>(
        <div className="w-[300px] rounded-md border" key={data.id}>
        <img
          src={`http://localhost:3000/${data.image}`}
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">Product Brand:- <span className='font-bold text-xl uppercase'>{data.productBrand}</span></h1>
          <h1 className="text-lg font-semibold">Product Type:- <span className='font-bold text-xl uppercase'>{data.productType}</span></h1>
          <h1 className="text-lg font-semibold">Product Price:- <span className='font-bold text-xl uppercase'>{data.productPrice}</span></h1>
          <h1 className="text-lg font-semibold">Product Rating:- <span className='font-bold text-xl uppercase'>{data.productRating}</span></h1>
        
          <button
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))}
    </div>
    </>
  )
}
