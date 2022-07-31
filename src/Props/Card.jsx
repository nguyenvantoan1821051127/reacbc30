import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    /**
     * so sanh this.state va this.props
     * state va props: deu la thuoc tinh co san cua react
     * class component dung de binding du lieu ra giao dien.
     * state lam niem vu quan ly cac gia tri thay doi tren
     * giao dien va co the gan lai gia tri moi thong qu ham setState
     * props lam nhien vu nhan gia tri tu nơi su dung the
     * (component cha) truyen vao va khong duoc gan la(readonly);
     */

    //this.props la thuoc tinh co san cua component
    //dung de nhan gia tri tu component cha truyen va
    console.log(this.props);
    return (
        <div className="card text-white bg-primary">
        <img className="card-img-top" src="https://picsum.photos/200/200" alt="Title" />
        <div className="card-body">
            <h4 className="card-title">{this.props.tenSP}</h4>
            <p className="card-text">{this.props.gia}</p>
        </div>
    </div>
    )
  }
}
