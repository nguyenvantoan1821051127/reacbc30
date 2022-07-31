import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {product,xemchitiet}=this.props;
    return (
      <div className='card'>
        <img src={product.image} alt='...' />
        <div className="card-body">
            <h3>{product.name} </h3>
            <p>{product.price}</p>
            {/* <p>{product.description}</p> */}
            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modelId"
            onClick={()=>{
              xemchitiet(product);
            }} >
              Launch
            </button>
        </div>
      </div>
    )
  }
}
