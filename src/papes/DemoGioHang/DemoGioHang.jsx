import React, { Component } from 'react'
import { connect } from 'react-redux'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

class DemoGioHang extends Component {
  render() {
    return (
      <div className='container'>
        <h3>bai tap gio hang</h3>
        <GioHang></GioHang>
        <DanhSachSanPham></DanhSachSanPham>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(DemoGioHang)