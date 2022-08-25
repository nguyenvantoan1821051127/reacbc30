import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSinhVien extends Component {
    renderSinhVien=()=>{
        let {arrSinhVien}= this.props;
        return arrSinhVien.map((sv,index)=>{
            return <tr key={index}>
            <td>{sv.id}</td>
            <td>{sv.name}</td>
            <td>{sv.phone}</td>
            <td>{sv.email}</td>
            <td>
                <button className='btn btn-danger mx-2'onClick={()=>{
              const action={
                type:'XOA_SINH_VIEN',
                payload:{
                  maSVClick:sv.id
                }
              };
              this.props.dispatch(action);
            }}>xoa</button>
                <button className='btn btn-danger'onClick={()=>{
              const action={
                type:'SUA_SINH_VIEN',
                payload:{
                  maSVClick:sv.id
                }
              };
              this.props.dispatch(action);
            }}>sua</button>
            </td>
        </tr>
        })
    }
  render() {
    return (
      <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Ma SV</th>
                    <th>Ho ten</th>
                    <th>So dien thoai</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.renderSinhVien()}
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    arrSinhVien:state.baitapFrom.arrSinhVien
})



export default connect(mapStateToProps)(TableSinhVien)