import React , { Fragment } from 'react';
import { Routes ,Route } from "react-router-dom";
import { Homepage ,Navbar ,ProductPage , Checkout , SearchResult } from "./components";



function App() {
  return (
         <Fragment>
           <Navbar/>
               <Routes>
                   <Route path="/" element={<Homepage/>} />
                   <Route path="/checkout" element={<Checkout/>} />
                   <Route path="/search" element={<SearchResult/>} />
                   <Route path="/productpage/:id" element={<ProductPage/>} />
               </Routes>    
         </Fragment>
  );
}

export default App;
