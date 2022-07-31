import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick=(e)=>{
        alert('hello work');
    }
    showMessage=(name)=>{
        alert('hello' + name);
    }
    userLogin={
        username:'abc',
        password:'123'
    }
  //reder ra giao dien chi reader primutive value:string, boolean,number,jsx(the html cau react)
  render() {
    return (
      <div className='container'>
        <h3>HandleEvent</h3>
        <p>username:{this.userLogin.username}</p>
        <button className='btn btn-danger'onClick={(e)=>{
            //goi ham khac
            this.showMessage('Nguyen Toan');
        }}>Click</button>
        <button className='btn btn-success ms-2' onClick={this.handleClick}>Click</button>
        <h3>HandleEnven event</h3>
        <input className='forn-control w-25' onChange={(e)=>{
            //e.targer: chinh la the input
            var tagInput=e.target;
            console.log('value',tagInput.value);
        }}/>
      </div>
    )
  }
}
