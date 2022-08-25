import React, { Component } from 'react'
import { connect } from 'react-redux'

class GioHang extends Component {
  renderGioHang=()=>{
    let {gioHang}=this.props;
    return gioHang.map((spGH,index)=>{
      return <tr key={index}>
        <td>{spGH.maSP}</td>
        <td><img src={spGH.hinhAnh} alt='...' width={50}/></td>                  
        <td>
            <button className='btn btn-primary'
            onClick={()=>{
              const action ={
                type:'TANG_GIAM_SO_LUONG',
                payload:{
                  maSP:spGH.maSP,
                  soLuong:1
                }
              }
              this.props.dispatch(action)
            }}>+</button>
              {spGH.soLuong}
            <button className='btn btn-primary'
            onClick={()=>{
              const action ={
                type:'TANG_GIAM_SO_LUONG',
                payload:{
                  maSP:spGH.maSP,
                  soLuong:-1
                }
              }
              this.props.dispatch(action)
            }}>-</button>
        </td>
        <td>{spGH.giaBan}</td>
        <td>{spGH.soLuong * spGH.giaBan}</td>
        <td>
            <button className='btn btn-danger mx-2'onClick={()=>{
              const action={
                type:'XOA_GIO_HANG',
                payload:{
                  maSPClick:spGH.maSP
                }
              };
              this.props.dispatch(action);
            }}>xoa</button>
        </td>
      </tr>
    })
  }
  render() {
    return (
      <div>
        <h3>gio hang</h3>
        <table className='table'> 
            <thead>
                <tr>
                    <th>ma san pham</th>
                    <th>hinh anh</th>
                    <th>so luong</th>
                    <th>gia ban</th>
                    <th>thanh tien</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {this.renderGioHang()}
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  gioHang:state.demoGioHangReducer.gioHang
})



export default connect(mapStateToProps)(GioHang)