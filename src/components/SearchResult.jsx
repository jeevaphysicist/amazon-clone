import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { callAPI } from '../utils/CallAPI';
import { ProductDetails } from '.';
import { INR_Currency } from '../utils/Constants';

const SearchResult = () => {
    const [ searchParams ] = useSearchParams();
    const [products,setProducts] = useState('');

const getSearchResult = ()=>{
      const searchTerm = searchParams.get('searchTerm');
      const Category = searchParams.get('category');

      callAPI('/data/search.json')
      .then(SearchResults=>{
        const categoryResults = SearchResults[Category];
        if(searchTerm){
            const results = categoryResults.filter(product=>product.title.toLowerCase().includes(searchTerm.toLowerCase()));
             setProducts(results);
        }
        else{
            setProducts(categoryResults);
        }
      })
}
// console.log("products",products)
useEffect(()=>{
    getSearchResult();
},[searchParams])


  return (
    <div className='min-w-[1200px] max-w-[1300px] m-auto pt-4'>
      {
        products && products.map((product,key)=>{
          return(
            <Link to={`/productpage/${product.id}`}>
            <div className='h-[250px] grid grid-cols-12 mt-1 mb-1 rounded'>
           <div className="col-span-2 p-4 bg-gray-200">
                <img  src={product.image} className='m-auto' alt='product image...' />
           </div>
           <div className="col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100">
                  <div className=' font-medium text-black p-2'>
                    <ProductDetails product={product} ratings={true}/>
                    <div className="text-xl xl:text-2xl">{INR_Currency.format(product.price)}</div>
                  </div>
           </div>
            </div>
            </Link>
          )
        })
      }
           
    </div>
  )
}

export default SearchResult