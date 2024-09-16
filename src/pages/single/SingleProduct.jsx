import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import {Link, useNavigate, useParams} from "react-router-dom"
import axios from "axios"


function SingleProduct() {  
    const {id}=useParams()      
    const [product, setProduct] = useState({})
    const navigate=useNavigate()
    const fetchProduct=async()=>{
        const response= await axios.get('https://66e3c9e3d2405277ed11d730.mockapi.io/products/' +id)
        if(response.status===200){
            setProduct(response.data)

        }
    }
const deleteMe=async ()=>{
const response=await axios.delete('https://66e3c9e3d2405277ed11d730.mockapi.io/products/' +id)
if(response.status===200){
    navigate("/")
}
else{
    alert("Delete Vayena Error found")
}
}
    useEffect(()=>{
fetchProduct()
    },[])
  
  return (  
    <>
    <Navbar/>
    <div class="bg-gray-100 dark:bg-gray-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src={product.product_Image} alt="Product Image" />
                </div>  
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                    <Link></Link>
                    <Link to='/edit'>
                        <button class="w-full bg-green-900 dark:bg-green-600 text-white py-2 px-4 rounded-full font-bold hover:bg-green-800 dark:hover:bg-green-700">Edit</button>
                    </Link>
                    </div>
                    <div class="w-1/2 px-2">
                        <button onClick={deleteMe} class="w-full bg-red-200 dark:bg-red-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-red-300 dark:hover:bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.productName}</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   {product.product_Description}
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">Price</span>
                        <span class="text-gray-600 dark:text-gray-300"> ${product.product_Price}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Category: </span>
                        <span class="text-gray-600 dark:text-gray-300">{product.product_Category}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Brand: </span>
                        <span class="text-gray-600 dark:text-gray-300">{product.product_Brand}</span>
                    </div>
                </div>
            
              
            </div>
        </div>
    </div>
</div>

      </>
  )
}

export default SingleProduct