import React, { Component } from 'react'
import FromProduct from './FromProduct'
import TableProduct from './TableProduct'
import axios from 'axios'
export default class ProductManagement extends Component {
  state={
    arrProduct:[
      {id:1,name:'product 1',price:'1000',description:'product 1 desc',img:'https://picsum.photos/200/200',productType:'mobile'},
      {id:2,name:'product 2',price:'2000',description:'product 2 desc',img:'https://picsum.photos/200/200',productType:'tablet'}
    ],
    productEdit:{
      id:'',
      name:'',
      price:'',
      img:'',
      productType:'mobile',
      description:''
    }
  }
  editProduct=(prodEdit)=>{
    console.log(prodEdit);
    this.setState({
      productEdit:prodEdit
    })
  }
  updateProduct = (productUpdate) => {
    //Lấy ra dữ liệu trong mảng (prodUpdate) 
    let prodUpdate = this.state.arrProduct.find(pro => pro.id === productUpdate.id);
    if(prodUpdate){
        for(let key in prodUpdate){
            prodUpdate[key] = productUpdate[key];
        }
    }
    //Sau khi thay đổi thì set lại state
    this.setState({
      arrProduct:this.state.arrProduct
    })

    console.log(productUpdate);
  }
  //CRUD
  //muon thay doi state nao this viet ham setState tai vi tri state do 
  createProduct=(newProduct)=>{
    console.log('newProduct',newProduct)
    let arrProductUpdate=this.state.arrProduct;
    arrProductUpdate.push(newProduct);
    //this.setState
    this.setState({
      arrProduct:arrProductUpdate
    })
  }
  delProduct=(idClick)=>{
    //xu ly mang =>setState
    // console.log('idClcik',idClick);
    let arrProductUpdate=this.state.arrProduct;
    //cach 1
    //tim tr vi tri can xoa
    // let indexDel=arrProductUpdate.findIndex(p=>p.id ===idClick);
    // if(indexDel  !== -1){
    //   //tim thay indexDel =>xoa
    //   arrProductUpdate.splice(indexDel,1);
    // }
    //cach 2
    arrProductUpdate=arrProductUpdate.filter(p=>p.id !==idClick);
    //setState cho arrProduct
    this.setState({
      arrProduct:arrProductUpdate
    })
  }
  render() {
    return (
      <div className='container'>
        <FromProduct updateProduct={this.updateProduct} createProduct={this.createProduct} productEdit={this.state.productEdit}></FromProduct>
        <TableProduct arrProduct={this.state.arrProduct} delProduct={this.delProduct} editProduct={this.editProduct}></TableProduct>
      </div>
    )
  }
  componentDidMount(){
    let promise =axios({
      url:'https://svcy.myclass.vn/api/product/getall',
      method:'GET'
    });

    promise.then(result => {
        //Thành công
        this.setState({
          arrProduct:result.data
        })
    });

    promise.catch(err => {
      console.log(err)
    })
}
}