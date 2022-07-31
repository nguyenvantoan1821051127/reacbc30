import React, { Component } from 'react'

//dung cach 1 khi szz cho page
import './style.css' //cach lay nay se anh huong toan bo ung dung
//dung khi class co the bi thay doi boi event tu nguoi dung
import style from './StyleRender.module.css';

//cach style truc tiep: dung khi gia tri style bi thay doi boi event tu nguoi dung

export default class StyleRender extends Component {
  render() {
    return (
      <div className='container'>
        StyleRender
        <p className='color-red'>
            hello cybesoft
        </p>
        
        <p className={`${style['color-blue']} display-4`}>text blue</p>
        <p style={{color:'green',padding:'15px',backgroundColor:'black'}}>text green</p>
      </div>
    )
  }
}
