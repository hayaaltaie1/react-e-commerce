import React from 'react'
// import './product.css'

const Product = (props) => {
  return (
    <>
        <div className="card" >
              <img src={props.product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">
                 {props.product.description}
                </p>
                <a href="#" className="btn btn-primary">
                  Details
                </a>
              </div>
            </div>
      
    </>
  )
}

export default Product
