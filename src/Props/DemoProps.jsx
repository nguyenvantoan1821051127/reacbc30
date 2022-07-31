import React, { Component } from 'react'
import Card from './Card'
import Baiviet from './Baiviet';

const dsBaiviet=[
    {tieuDe:'tieu de 1',noiDung:'noi dung 1'},
    {tieuDe:'tieu de 2',noiDung:'noi dung 2'},
    {tieuDe:'tieu de 3',noiDung:'noi dung 3'}
]
export default class DemoProps extends Component {
    render() {
    const tenSP='product 1';
    const gia=1000;
    const baiviet={

        tieuDe:'lam giau khong kho',
        noiDung:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim amet possimus blanditiis quisquam culpa odit esse error quidem consequatur. Sit in porro dicta eligendi quasi.'
    }
    return (
      <div className='container'>
        <div className="w-25">
            <Card tenSP={tenSP} gia={gia}></Card>
        </div>
        <div className="w-25">
            <Card tenSP={'product 2'} gia={2000}></Card>
        </div>
        <hr />
        <h3>demo bai viet</h3>
        {dsBaiviet.map((baiViet,index)=>{
            return <div key={index}>
                <Baiviet obBaiViet={baiViet}/>
            </div>
        })}
      </div>
    )
  }
}
