import React, { Component } from 'react'
import { connect } from 'react-redux'

class Burger extends Component {
    renderTopping=(name)=>{
        let {burger}=this.props;
        let itemSalad=burger.find(item=>item.name === name)
        if(itemSalad){
            let arrJSX=[];
            for(let index=0;index<itemSalad.quantity;index++){
                let divSalad=<div className={name} key={index}></div>
                //them vao jsx
                arrJSX.push(divSalad)
            }
            return arrJSX;
        }
        return [];
    }
  render() {
    return (
      <div>
        <div className="breadTop"></div>
            {this.renderTopping('salad')}
            {this.renderTopping('cheese')}
            {this.renderTopping('beef')}
        <div className="breadBottom"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    burger:state.demoBurgerReducer.burger
})



export default connect(mapStateToProps )(Burger)