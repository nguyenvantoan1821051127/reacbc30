import React, { Component } from 'react'
import ExModal from './ExModal'
import ExProductList from './ExProductList'

export default class ExerciseCarStone extends Component {
    state={
        modalState:{id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000}
    }
    xemchitiet=(sanphamClick)=>{
        this.setState({modalState:sanphamClick})
    }

    render() {
    return (
      <div className='container'>
        <h3>ExerciseCarStore</h3>
        <ExModal modalState={this.state.modalState}></ExModal>
        <ExProductList xemchitiet={this.xemchitiet}></ExProductList>
      </div>
    )
  }
}
