import React, { Component } from 'react'

export default class FromProduct extends Component {
    state={
        id:'',
        name:'',
        price:0,
        img:'',
        produtType:'mobile',
        description:''
}
    handleChange=(e)=>{
        let{id,value}=e.target;
        this.setState({
            [id]:value
        },()=>{
            console.log(this.state);
        }
        )
}
    
    render() 
  {


    return (
      <div className='card'>
        <div className="card-header bg-dark text-warning "style={{fontSize:20,fontWeight:'bold'}}>
            Product info
        </div>
        <div className="card-body row">
            <div className="col-6">
                <div className="form-group">
                    <p>id</p>
                    <input className='form-control'id='id'name='id' onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <p>name</p>
                    <input className='form-control'id='name'name='name'onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <p>price</p>
                    <input className='form-control'id='price'name='price' type='number'onChange={this.handleChange}/>
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <p>img</p>
                    <input className='form-control'id='img'name='img' onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <p>productType</p>
                    <select className='form-control'id='productType'name='productType'onChange={this.handleChange}>
                        <option>moblie</option>
                        <option>table</option> 
                        <option>laptop</option>  
                    </select>
                </div>
                <div className="form-group">
                    <p>product description</p>
                    <textarea className='form-control'id='description'name='description' rows={3} onChange={this.handleChange}>

                    </textarea>
                </div>
            </div>
        </div>
        <div className="card-footer">
            <button className='btn btn-success mx-2'>Create</button>
            <button className='btn btn-primary mx-2'>Update</button>
        </div>
      </div>
    )
  }
}
