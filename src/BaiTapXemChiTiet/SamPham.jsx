import React, { Component } from 'react'

export default class SamPham extends Component {
  render() {
    let {dienthoai,xemChiTiet}=this.props;

    return (
        <div className="card">
            <img src={dienthoai.hinhAnh} alt='...'/>
            <div className="card-body">
                <h3>{dienthoai.tenSP}</h3>
                <p>{dienthoai.giaBan.toLocaleString()}</p>
                <button className='btn btn-success' onClick={()=>{
                    xemChiTiet(dienthoai);
                }}>xem chi tiet</button>
            </div>
        </div>
    )
  }
}
