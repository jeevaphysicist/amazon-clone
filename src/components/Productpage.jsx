import {Fragment , useState , useEffect } from 'react';
import { useParams ,Link } from 'react-router-dom';
import { callAPI } from '../utils/CallAPI';
import { INR_Currency } from "../utils/Constants";
import { ProductDetails } from "./";
import { addToCart } from "../redux/CartSlicer";
import { useDispatch } from "react-redux"

const Productpage = () => {
   let { id } = useParams();
   const [product,setProduct] = useState(null);
   const [quantity,setQuantity] = useState('1');
   const dispatch = useDispatch();
 
   const getProdutdata  = async ()=>{
             await callAPI ('data/products.json')
                   .then((productResult)=>{
                    //    console.log("product results",productResult);
                    setProduct(productResult[id]);
                   }) 
   }

   useEffect(()=>{
    getProdutdata();
   },[])

    let addQuantityToProduct = ()=>{
                setProduct(product.quantity = quantity);
                return product ;
    }


   if(!product?.title) return <h1> Loading ... </h1>


  return (  
          product && 
          <Fragment>
               <div className='h-screen bg-amazonclone-backgroundcolor'>
                  <div className='min-w-[1000px] max-w-[1500px] m-auto p-4 '>
                    <div className="grid grid-cols-10 gap-2">
                        {/* left */}
                        <div className="col-span-3 p-8 rounded bg-white m-auto ">
                            <img src={product.image} alt="img..." />
                        </div>
                        {/* Midle */}
                        <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
                            <div className='mb-3'>
                            <ProductDetails product={product} ratings={true} />
                            </div>
                            <div className='text-base xl:text-lg mt-3'>
                                 {product.description}
                            </div>
                        
                        </div>
                        {/* Right */}
                        <div className="col-span-2 p-4 bg-white">
                           <div className='text-xl xl:text-2xl text-red-700 font-semibold text-right'>{INR_Currency.format(product.price)}</div>
                           <div className='text-base xl:text-lg text-gray-500 font-semibold text-right'> RRP: <span className=' line-through '>{INR_Currency.format(product.oldPrice)}</span></div>
                           <div className='text-sm xl:text-base text-blue-500 font-semibold mt-3'>FREE Returns</div>
                           <div className='text-base xl:text-lg  text-blue-500 font-semibold mt-1'>FREE Delivery</div>
                           <div className='text-base xl:text-lg text-green-500 font-semibold mt-1'>In Stock</div>
                           <div className='text-base xl:text-lg mt-1'>Quantity : 
                               <select onChange={(e)=>setQuantity(e.target.value)} className='bg-white p-2 border rounded-md focus: border-indigo-500' >
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                               </select>
                           </div>
                           <Link to='/checkout'>
                             <button className='btn' onClick={()=>dispatch(addToCart(addQuantityToProduct()))}>Add to Cart</button>
                           </Link>
                        </div>
                    </div>

                  </div>
               </div>
          </Fragment>      
      
   
  )
}

export default Productpage