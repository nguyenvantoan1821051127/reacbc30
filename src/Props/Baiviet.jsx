import React, { Component } from 'react'

export default class Baiviet extends Component {
  render() {
    let {obBaiViet}=this.props;
    return (
      <div className='bg-secondary tex-white pd-5'>
        <h3>{obBaiViet.tieuDe}</h3>
        
        <p>{obBaiViet.noiDung}</p>
      </div>
    )
  }
}
