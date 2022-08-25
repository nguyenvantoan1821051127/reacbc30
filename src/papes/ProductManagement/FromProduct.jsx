import React, { Component } from 'react'

export default class FromProduct extends Component {

    state={
        productInfo:{
            id:'',
            name:'',
            price:'',
            img:'',
            productType:'mobile',
            description:''
        },
        errors:{
            id:'',
            name:'',
            price:'',
            img:'',
            description:''
        }
    }
    handleChange=(e)=>{
        let {id,value}=e.target;

        let dataType=e.target.getAttribute('data-type');
        //xu ly product info
        let newValue={...this.state.productInfo};
        newValue[id]=value;
        //xu ly loi
        let newErrors={...this.state.errors};
        //check loi 
        let errorMess='';
        if(value.trim()===''){
            errorMess=id+ ' khong duoc de trong';
        }else{
            //loi dinh dang
            if(dataType === 'number'){
                let regexNumber= /^\d+$/; 
                if(!regexNumber.test(value)){
                    errorMess=id+ ' phai la so'
                }
            }
        }
        newErrors[id]=errorMess;
        //setState
        this.setState({
            productInfo:newValue,
            errors:newErrors
        },()=>{
            console.log(this.state);
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        //check truoc khi submit du lieu
        let valid=true;
        let{errors,productInfo}=this.state;
        //check error (tat ca error phai trong)
        for(let key in errors){
            if(errors[key] !== ''){
                valid=false;
                break;
            }
        }
        //check value(productType )tat cavalue phai khac rong
        for(let key in productInfo){
            if(productInfo[key].trim() ===''){
                valid=false;
                break;
            }
        }
        if(!valid){
            alert('du lieu khong hop le');
            return;
        }
        //hop le
        // alert('submit');
        this.props.createProduct(productInfo);
    }
    // static getDerivedStateFromProps(newProps,currentState){
    //     //lay props.productEdit=>gan vao state.productInfo =>sau khi giao dien lay ra tu state
    //     if(newProps.productEdit.id !==currentState.productInfo.id){
    //         currentState.productInfo=newProps.productEdit;
    //         return currentState //ham nay se tao ra this.state moi
    //     }
    //     return null;

    // }
    //Chạy trước render sau khi props thay đổi
    componentWillReceiveProps(newProps) {
        //Khi bấm nút chỉnh sửa lấy props gán vào state => giao diện render ra từ state
        this.setState({
            productInfo: newProps.productEdit
        })
    }


  render() {
    // console.log(this.props.productEdit);
    let {id,name,productType,description,price,img}=this.state.productInfo;
    return (
      <form className='card' onSubmit={(this.handleSubmit)}>
        <div className="card-header bg-dark text-warning" style={{fontSize:20,fontWeight:'bold'}}>
            Product info
        </div>
        <div className="card-body row">
            <div className="col-6">
                <div className="form-group">
                    <p>ID</p>
                    <input value={id} className='form-control' id="id" name="id" onInput={this.handleChange}/>
                    <p className='text-danger'>{this.state.errors.id}</p>
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <p>name</p>
                    <input value={name}className='form-control' id="name" name="name" onInput={this.handleChange}/>
                    <p className='text-danger'>{this.state.errors.name}</p>
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <p>price</p>
                    <input value={price}data-type='number' className='form-control' id="price" name="price"type="text" onInput={this.handleChange}/>
                    <p className='text-danger'>{this.state.errors.price}</p>
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <p>img link</p>
                    <input value={img}className='form-control' id="img" name="img"onInput={this.handleChange} />
                    <p className='text-danger'>{this.state.errors.img}</p>
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <p>product type</p>
                    <select value={productType}className='form-control' id="type" name="type" onInput={this.handleChange}>
                        <option>mobile</option>
                        <option>tablet</option>
                        <option>laptop</option>
                    </select>
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <p>Product description</p>
                    <textarea value={description}className='form-control' id="description" rows={3} onInput={this.handleChange}>
                    </textarea>
                    <p className='text-danger'>{this.state.errors.description}</p>
                </div>
            </div>
        </div>
        <div className="card-footer">
            <button className='btn btn-success mx-2'>Create</button>
            <button className='btn btn-primary mx-2'type="button" 
            onClick={()=>{
                this.props.updateProduct
                (this.state.productInfo)
            }}>update</button>
        </div>
      </form>
    )
  }
}
