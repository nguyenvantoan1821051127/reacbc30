//rcredux: nho xoa mapStateToProps

import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoChangecolo extends Component {
    changColor=(color)=>{
        const action={
            type:'CHANGE_COLOR',
            imgCar: `./img/products/${color}-car.jpg`
        }
        //gui du lieu len redux
        this.props.dispatch(action);
    }
  render() {
    return (
      <div className='container'>
        <h3>bai tap chon mau xe</h3>
        <div className="row">
            <div className="col-6">
                <img src={this.props.imgCar}className='w-100' alt="..."/>
            </div>
            <div className="col-6">
                <button className='btn' style={{backgroundColor:'red',color:'#fff'}} onClick={()=>{
                    this.changColor('red');
                }}>red</button>
                <button className='btn' style={{backgroundColor:'black',color:'#fff'}} onClick={()=>{
                    this.changColor('black');
                }}>black</button>
                <button className='btn' style={{backgroundColor:'silver',color:'#fff'}} onClick={()=>{
                    this.changColor('silver');
                }}>silver</button>
                <button className='btn' style={{backgroundColor:'#eee',color:'#fff'}} onClick={()=>{
                    this.changColor('steel');
                }}>steel</button>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({//state;rootReducer
    imgCar:state.imgCar
})

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(DemoChangecolo)

