import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import {Search} from "./";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Navbar = () => {

    const cart  = useSelector((state)=>state.cart);
  console.log("cart",cart);
  return (
    <header className='min-w-[1000px]'>
        <div className='flex height-[60px] bg-amazonclone text-white'>
            {/* LEFT */}
            <div className='flex items-center m-4'>
                <Link to='/'>
                <img className='h-[35px] w-[100%] m-2' src={`../images/amazon.png`} alt="logo..." />
                </Link>
                <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm '>Deliver&nbsp;to</div>
                 <div className='text-sm xl:base-text font-bold'>India </div>
                </div>                
            </div>

            {/* Middle */}
           <div className='flex grow items-center relative'>
              <Search/>
           </div>

            {/* Right */}
            <div className='flex items-center m-4 '>
            <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm '>Hello&nbsp;Sign&nbsp;in</div>
                 <div className='text-sm xl:base-text font-bold'>Accounts & Lists </div>
            </div>
            <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm '>Returns</div>
                 <div className='text-sm xl:base-text font-bold'>& Orders </div>
            </div>
            <div className='flex pr-3 pl-3'>
            <Link to="/checkout" className='flex'>
            <ShoppingCartIcon className='h-[48px]' />
            <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                    {cart.productsNumber}
                </div>
            </div>
            <div className='text-xs xl:text-sm mt-7 font-bold'>
                Cart
            </div>
            </Link>
            </div>
            </div>
        </div>
        <div className=' bg-amazonclone-light_blue text-white flex space-x-3 text-xs xl:text-sm p-2 pl-6'> 
            <div>Today's Deals</div>
            <div>Customer Service</div>
            <div>Registry</div>
            <div>Gift Cards</div>
            <div>Sell</div>
        </div>
    </header>
  )
}

export default Navbar