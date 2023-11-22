import { useSelector ,useDispatch } from "react-redux";
import { Link} from 'react-router-dom'
import {ProductDetails} from "./";
import { INR_Currency } from '../utils/Constants';
import { RemoveFromCart } from "../redux/CartSlicer"

const Checkout = () => {
  let dispatch = useDispatch();
   
  let products = useSelector((state)=>state.cart.products);
  let Items = useSelector((state)=>state.cart.productsNumber);
  let SubTotalPrice = useSelector((state)=>state.cart.products.reduce((subtotal,product)=>subtotal + (product.price * product.quantity) ,0));


  return (
    <div className=" h-screen bg-amazonclone-backgroundcolor">
      <div className="min-w-[1000px] max-w-[1500px] p-8 m-auto">
        <div className="grid grid-cols-8 gap-10">
          <div className="col-span-6  bg-white">
              <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
              {
                products && products.map(product=>
                <div key={product.id}>
                  <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                      <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                        <div className="col-span-2">
                           <Link to={`/productpage/${product.id}`}>
                                <img src={product.image} className="p-4 m-auto" alt="product image..." />                             
                           </Link>
                        </div>
                        <div className="col-span-6">
                           <div className="text-black font-medium mt-2">
                                <Link to={`/productpage/${product.id}`}>
                                  <ProductDetails product={product} ratings={false}/>
                                </Link>
                           </div>

                           <div>
                            <button className="taxt-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1" onClick={()=>dispatch(RemoveFromCart(product.id))}> Delete </button>                            
                           </div>

                           <div className="grid grid-cols-3 w-20 text-center">
                            <div className="text-xl xl:text-2xl bg-gray-400 rounded">-</div>
                            <div className="text-lg xl:text-xl bg-gray-200 rounded">{product.quantity}</div>
                            <div className="text-xl xl:text-2xl bg-gray-400 rounded">+</div>
                           </div>

                        </div>
                      </div>
                      <div className="col-span-2">
                           <div className="text-lg xl:text-xl mt-4 mr-4 font-semibold">
                             {INR_Currency.format(product.price)}
                           </div>
                      </div>

                  </div>
                </div>)
              }
              <div className="text-lg xl:text-xl text-right mb-4 mr-4">SubTotal ({Items} items) : <span className="font-semibold"> {INR_Currency.format(SubTotalPrice)} </span> </div>
          </div>
          {/* Checkout */}
          <div className="col-span-2 bg-white rounded h-[250px] p-7">
              <div className="text-xs xl:text-sm text-green-800 mb-2">Your order qualifies for <span className="font-bold">FREE DELIVERY</span> . Delivery Details</div>
              <div className="text-xs xl:text-sm mb-4">SubTotal ({Items} items) : <span className="font-semibold"> {INR_Currency.format(SubTotalPrice)} </span> </div>
              <button className="btn">Proceed to Checkout</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Checkout