import React, { useContext, useEffect, useState } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench, ShoppingBag } from 'lucide-react'
import axios from 'axios'
import UserContext from '../context/UserContext'
import {  useNavigate } from 'react-router-dom'

export default function Home() {
    let [data, setData] = useState([])
    let [inp, setInp] = useState('')
    let {isClientLogin, auth} =  useContext(UserContext)
    let navigation = useNavigate()

    async function getData(){
        let result = await axios.get('http://localhost:3000/api/getProduct')
        setData(result.data)
    }
    useEffect(()=>{
        getData()
        getCart()
    }, [auth])
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

async function handleCart(data) {
 if(auth.user){
  let username = auth.user.email.split('@')[0]
  await axios.post(`http://localhost:3000/api/cartSave/${username}`, data)
  alert("item saved into cart..")
  getCart()
 }else{
  navigation('/register')
 }
}

//cart item count
let {setCartList} = useContext(UserContext)
async function getCart(){
  if(auth.user){
         let username = auth.user.email.split('@')[0]
        let result = await axios.get(`http://localhost:3000/api/getCart/${username}`)
        
        setCartList(result.data.length)
       }
    }

// search Bar
async function handleInp(){
  let result = await axios.get(`http://localhost:3000/api/search/${inp}`)
  setData(result.data)
}
useEffect(()=>{
  if(inp == ''){
    getData()
  }
  handleInp()
}, [inp])

  return (
    <>
    <aside className="flex fixed h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
   
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xl font-semibold uppercase text-white">Search By Brand</label>
         
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search"
        onChange={(e)=>setInp(e.target.value)}
        id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
      
    </div>
</form>

<button
onClick={handleInp}
className='text-white bg-gray-600 p-2 text-xl rounded font-bold'>Search</button>

           
          </div>
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
            onClick={()=>handleCart(data)}
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
