import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormSinhVien extends Component {
  handChange=(e)=>{
    const action={
      type:'HANDLE_CHANGE_INPUT',
      id:e.target.id,
      value:e.target.value
    };
    this.props.dispatch(action);
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const action={
        type:'THEM_SINH_VIEN',
        sinhVien:{...this.props.sinhVien}
    };
    this.props.dispatch(action);
  }
  render() {
    let {updateSinhVien}=this.props;
    console.log(this.updateSinhVien)
    return (
      <div className='card text-start'>
        <div className="card-header bg-dark text-white">
            <h3>Thong tin sinh vien</h3>
        </div>
        <div className="card-body">
        <form className='form'>
          <div className="row">
            <div className="form-group col-6">
              <span>Ma sv</span>
              <input className='form-control' id='id' value={updateSinhVien.id}
              onChange={this.handChange}/>
              <p className='text-danger'></p>
            </div>
            <div className="form-group col-6">
              <span>Ho Ten</span>
              <input className='form-control' id='name' value={updateSinhVien.name}
              onChange={this.handChange}/>
              <p className='text-danger'></p>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <span>Email</span>
              <input className='form-control' id='email' type="email" value={updateSinhVien.email}
              onChange={this.handChange}/>
              <p className='text-danger'></p>
            </div>
            <div className="form-group col-6">
              <span>SDT</span>
              <input className='form-control' id='phone' value={updateSinhVien.phone}
              onChange={this.handChange}/>
              <p className='text-danger'></p>
            </div>
        </div>
        <div className="row">
          <div className="col mt-2 text-start">
            <button type='submit' className='btn btn-success'onClick={this.handleSubmit}>Them Sinh Vien</button>
            <button type="submit" class="btn btn-warning mx-2">Cap nhat</button>
          </div>
        </div>
      </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // baitapFrom:state.baitapFrom
  updateSinhVien:state.baitapFrom.updateSinhVien
})


export default connect(mapStateToProps)(FormSinhVien)