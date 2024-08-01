import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminTable() {
    let [data, setData] = useState([])

    async function getData(){
        let result = await axios.get('http://localhost:3000/api/getProduct')
        setData(result.data)
    }
    useEffect(()=>{
        getData()
    }, [])

   async function deleteData(id){

    let flag  =  confirm("Are U sure to delete")

     if(flag == true){
      await axios.delete(`http://localhost:3000/api/deleteProduct/${id}`)
      getData()
     }
    }
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
      
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Product Brand</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Product Type
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Product Price
                      </th>
                      

                      {/* <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Product Rating
                      </th> */}
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                       Edit
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((data) => (
                      <tr key={data.id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={`http://localhost:3000/${data.image}`}
                                alt="not found"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{data.productBrand}</div>
                             
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{data.productType}</div>
                          
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                           {data.productPrice}
                          </span>
                        </td>
                        {/* <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {data.productRating}
                        </td> */}
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        <Link
                        to={`/admin/view/${data.id}`}
                        type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View</Link>

                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={()=>deleteData(data.id)}
                        >Delete</button>

                        <Link
                        to={`/admin/update/${data.id}`}
                        type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Update</Link>
                        </td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        
      </section>
    </>
  )
}
