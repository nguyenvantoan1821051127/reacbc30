import React, { Component } from 'react'

//ket noi reduc
import {connect} from 'react-redux'
class DemoTangGiamSoLuong extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>DemoTangGiamSoLuong</h3>
        <p>
            Number:{this.props.number}
        </p>
        <button className='btn btn-success' onClick={()=>{
            //action:dai dien du lieu gui len store lam thay doi state
            const action={
                type:'TANG_SO_LUONG', //thuoc tinh bat buoc
                newNumber:this.props.number+1
            }
            //su dung ham this.props.dispatch de gui du lieu len redux
            this.props.dispatch(action)
        }}>+</button>
        <button className='btn btn-success' onClick={()=>{
            //action:dai dien du lieu gui len store lam thay doi state
            const action={
                type:'GIAM_SO_LUONG', //thuoc tinh bat buoc
                newNumber:this.props.number-1
            }
            //su dung ham this.props.dispatch de gui du lieu len redux
            this.props.dispatch(action)
        }}>-</button>
      </div>
    )
  }
}
//HOC

//chuyen state cua redux ve thang props cua component

const mapStateToProps=(rootReducer)=>{
    return {
        number:rootReducer.number
    }
}


//componrnt chua state redux=conect()(DemoTangGiamSoLuong)
export default connect(mapStateToProps)(DemoTangGiamSoLuong)