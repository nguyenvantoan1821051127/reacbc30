import React, { Component } from 'react'
import ProductList from './ProductList'
import ShoesModal from './ShoesModal'

export default class ShoesStore extends Component {
    state={
        modalState:{"id": 1,
        "name": "Adidas Prophere",
        "alias": "adidas-prophere",
        "price": 350,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 995,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"}
    }
    xemchitiet=(sanphamClick)=>{
        this.setState({
            modalState:sanphamClick
        })
    }    

  render() {
    return (
        <div className="container">
            <h2>shop store</h2>
            <ShoesModal modalState={this.state.modalState}></ShoesModal>
            <ProductList xemchitiet={this.xemchitiet}></ProductList>
        </div>
    )
  }
}
