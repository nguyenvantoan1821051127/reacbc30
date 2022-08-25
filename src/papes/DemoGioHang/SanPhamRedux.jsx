import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {
  render() {
    let {sp}=this.props;
    return (
      <div className='card'>
        <img src={sp.hinhAnh} alt='...' className='w-100'height={350}/>
        <div className="card-body">
            <p>{sp.tenSP}</p>
            <p>{sp.giaBan}</p>
            <button className='btn btn-success'onClick={()=>{
                const action={
                    type:'THEM_GIO_HANG',
                    payload:{
                        sanPhamClick:sp
                    }
                };
                //this.props.dispatch =>dua du lieu len render
                this.props.dispatch(action)
            }}>them gio hang</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    // demoGioHang:state.demoGioHangReducer
})



export default connect(mapStateToProps)(SanPhamRedux)