import React, { Component } from 'react'

export default class ExProductItem extends Component {
  render() {
    let {product,xemchitiet}=this.props;
    return (
      <div className='card'>
        <img src={product.img} alt='...' />
        <div className="card-body">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modelId" onClick={()=>{
              xemchitiet(product);
            }}>
    Launch
  </button>
        </div>
      </div>
    )
  }
}
