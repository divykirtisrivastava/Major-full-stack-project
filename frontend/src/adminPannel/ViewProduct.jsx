import React, { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function ViewProduct() {
  let {id} = useParams()

let [data, setData] = useState([])
console.log(data)
async function getDataById(){
  let result = await axios.get(`http://localhost:3000/api/getProductById/${id}`)
  setData(result.data)
}
useEffect(()=>{
  getDataById()
}, [])


  return (
    <div>
   {data.map((data)=>(
       <div className="w-[300px] rounded-md border">
       <img
         src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
         alt="Laptop"
         className="h-[200px] w-full rounded-t-md object-cover"
       />
       <div className="p-4">
         <h1 className=" items-center text-lg font-semibold">
           ID:- {data.id}
         </h1>
         <h1 className=" items-center text-lg font-semibold">
           Product Brand:- {data.productBrand}
         </h1>
         <h1 className=" items-center text-lg font-semibold">
           Product Type:- {data.productType}
         </h1>
         <h1 className=" items-center text-lg font-semibold">
           Product Price:- {data.productPrice}
         </h1>
         <h1 className=" items-center text-lg font-semibold">
           Product Rating:- {data.productRating}
         </h1>
         
         
         <Link
           type="button"
           to='/'
           className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
         >
           Back
         </Link>
       </div>
     </div>
   ))}
    </div>
  )
}
