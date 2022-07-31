import React, { Component } from 'react'
import SamPham from './SamPham'
const data=[
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
  ]
  
export default class BaiTapXemChiTiet extends Component {
    renderProduct =()=>{
        return data.map((dienthoai,index)=>{
            return <div className='col-4'key={index}>
                <SamPham dienthoai={dienthoai} xemChiTiet={this.xemChiTiet}></SamPham>
            </div>
        })
    }
    xemChiTiet=(sanphamClick)=>{
        console.log(sanphamClick);
        //set lai giatri
        this.setState({
            sanPhamChitiet:sanphamClick
        })
    }
    state={
        sanPhamChitiet:{"maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg"}
    }
    render() {
        let {tenSP,maSP,hinhAnh,ram,rom,heDieuHanh,manHinh,cameraSau,cameraTruoc,giaBan}=this.state.sanPhamChitiet;
    return (
      <div className='container'>
        <h3>danh sach san pham</h3>
        <div className="row">
            {this.renderProduct()}
        </div>
        <div className="mt-2">
            <div className="row">
                <div className="col-4">
                    <h3 className='text-center'>{tenSP}</h3>
                    <img src={hinhAnh}alt='...' className='w-100'/>
                </div>
                    <div className="col-4">
                        <h3>thong so ky thuat</h3>
                        <div className="table">
                            <thead>
                                <tr>
                                    <td>man hinh</td>
                                    <td>{manHinh}</td>
                                </tr>
                                <tr>
                                    <td>he dieu hanh</td>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>camera truoc</td>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>camera sau</td>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{rom}</td>
                                </tr>
                            </thead>
                        </div>
                    </div>
            </div>
        </div>
      </div>
    )
  }
}
