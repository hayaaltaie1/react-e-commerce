import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const api = 'https://fakestoreapi.com/products'

  const [products, setProducts]= useState([]);

  useEffect(()=>{
    fetch(api)
            .then(res=>res.json())
            .then(data => setProducts(data))

  },[])


  return (
    <>
      <h2 className="text-center p-4">Our Product</h2>
        <div className="container">
        <div className="row">
{
  products.map((pro)=>{
    return (
      <div key={pro.id} className="col-3">
            <Product  product={pro}/>
      </div>
    )
  })
}
         
        </div>
      </div>
    </>
  );
};

export default ProductList;
