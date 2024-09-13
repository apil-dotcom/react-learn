import Navbar  from "../../components/Navbar"
import Card  from "../../components/Card"
import axios from 'axios'
import { useEffect, useState } from "react"
function HomePage(){
   const [products, setproducts] = useState([])      
   const fetchProducts=async ()=>{
      const response=await axios.get('https://66e3c9e3d2405277ed11d730.mockapi.io/products')
if(response.status===200){
   setproducts(response.data)

}
   }
   useEffect(()=>{
fetchProducts()
   },[]) 
   console.log(products)
    return(
       <>
    <Navbar/>
    <div className='flex space-x-7 mt-4 ml-2 flex-wrap'>

      {
products.map((product)=>{
   return(
      <Card product={product} />
   )
}) 
      }
    </div>

       </>
    )
}
export default HomePage    