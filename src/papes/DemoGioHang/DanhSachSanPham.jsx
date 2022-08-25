import React, { Component } from 'react'
import { connect } from 'react-redux'
import SanPhamRedux from './SanPhamRedux'

class DanhSachSanPham extends Component {
  renderSanPham=()=>{
    let {arrSanPham}=this.props;
    return arrSanPham.map((sp,index)=>{
      return <div className="col-4" key={index}>
        <SanPhamRedux sp={sp}></SanPhamRedux>
      </div>
    })
  }
  render() {
  // let {arrSanPham}=this.props.arrSanPham;
    return (
      <div className='danh-sach-san-pham mt-2'>
        <h3>danh sach san pham</h3>
        <div className="row">
          {this.renderSanPham()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  arrSanPham:state.demoGioHangReducer.arrSanPham
})



export default connect(mapStateToProps)(DanhSachSanPham)