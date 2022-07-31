import React, { Component } from 'react'
import ExProductItem from './ExProductItem'

const data=[
    { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 },
{ id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000 },
{ id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 3000 },
{ id: 3, name: 'Steel car', img: './img/products/steel-car.jpg', price: 4000 }
  ]
export default class ExProductList extends Component {
    renderProduct=()=>{
        let {xemchitiet}=this.props;
        return data.map((prod,index)=>{
            return <div className="col-3"key={index}>
                <ExProductItem product={prod} xemchitiet={xemchitiet}></ExProductItem>
            </div>
        })
    }
    render() {
    return (
        <div>
            <div className='text-center'>
        product list
      </div>
      <div className="row">
        {this.renderProduct()}
      </div>
        </div>
    )
  }
}
