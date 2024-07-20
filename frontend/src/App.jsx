import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {

  let [data, setData] = useState([])

 async function getData(){
    let result = await axios.get('http://localhost:3000/api/getProduct')
    setData(result.data)
  }
useEffect(()=>{
  getData()
},[])
  return (
    <div>
      <table border="2">
        <thead>
          <th>ProductType</th>
          <th>ProductBrand</th>
          <th>ProductRating</th>
          <th>ProductPrice</th>
        </thead>

        <tbody>
          {data.map((data)=>(
            <tr>
              <td>{data.productType}</td>
              <td>{data.productBrand}</td>
              <td>{data.productRating}</td>
              <td>{data.productPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
