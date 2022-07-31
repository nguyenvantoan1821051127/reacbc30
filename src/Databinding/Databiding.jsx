import React, { Component } from 'react'

export default class Databiding extends Component {
  showInfo=()=>{
    return "hello workd";
  }
  //phuong thuc
  render() {
    const hoTen="Nguyen Toan";
    const tinhDiemTrungBinh=(diemToan,diemVan)=>{
        return (diemToan+diemVan)/2;
    }


    return (
      <div>
        Databiding
        <p>Hoten:{hoTen}</p>
        <p>diem trung binh:{tinhDiemTrungBinh(8,2)}</p>
        <hr />
        <p>{this.showInfo()}</p>
      </div>
    )
  }
}
