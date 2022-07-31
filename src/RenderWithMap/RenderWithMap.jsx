import React, { Component } from 'react'

const data=[
    {id:'1',name:'producet 1',price:1000,img:'https://i.pravatar.cc?u=1'},
    {id:'2',name:'producet 2',price:2000,img:'https://i.pravatar.cc?u=2'},
    {id:'3',name:'producet 3',price:3000,img:'https://i.pravatar.cc?u=3'}
]

export default class RenderWithMap extends Component {
    renderProduct =()=>{
        // let jsxArr=[];
        // for(let index=0;index<data.length;index++ ){
        //     //moi lan duyet lay ra 1 pbject prod trong mang data
        //     let prob =data[index];
        //     let tr=<tr>
        //         <td>{prob.id}</td>
        //         <td>{prob.name}</td>
        //         <td>{prob.price}</td>
        //         <td><img src={prob.img} alt='...' width={50}/></td>
        //     </tr>
        //     //add cac jsx vao arrJSX
        //     jsxArr.push(tr);
        // }
        // return jsxArr; 
        //cach 2:dung map

        let jsxArr=data.map((prod,index)=>{
            return <tr key={index}>
                     <td>{prod.id}</td>
                     <td>{prod.name}</td>
                     <td>{prod.price}</td>
                     <td><img src={prod.img} alt='...' width={50}/></td>
                 </tr>
        })
        return jsxArr;
    }
    renderCardProduct=()=>{
        return data.map((prob,index)=>{
            return <div className="col-4"key={index}>
                <div className="card">
                    <img src={prob.img}alt='...' />
                    <div className="card-body">
                        <p>{prob.name}</p>
                        <p>{prob.price}</p>
                        <button className='btn btn-success'>
                            add to cart
                        </button>
                    </div>
                </div>
            </div>
        })
    }
    render() {
    return (
        <div className='container'>
            <h3>table product</h3>
            <table className='table '>
                <thead>
                    <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>img</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderProduct()}
                </tbody>
            </table>
            <h3>Product list</h3>
            <div className="row">
                {this.renderCardProduct()}
            </div>
        </div>
    )
  }
}
