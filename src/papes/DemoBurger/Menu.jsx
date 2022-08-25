import React, { Component } from 'react'
import { connect } from 'react-redux'

class Menu extends Component {
  render() {
    let {burger}=this.props;
    return (
      <div >
        <h3>Menu</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>thuc an</th>
                    <th>so luong</th>
                    <th>gia</th>
                </tr>
            </thead>
            <tbody>
                {burger.map((item,index)=>{
                    return <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                        <button className='btn btn-danger'
                        onClick={()=>{
                            let action={
                                type:'CHANGE_QUANTITY',
                            payload:{
                                name:item.name,
                                quantity:1
                            }
                            }
                            this.props.dispatch(action)
                        }}>+
                        </button>{item.quantity}
                        <button className='btn btn-danger'
                        onClick={()=>{
                            let action={
                                type:'CHANGE_QUANTITY',
                            payload:{
                                name:item.name,
                                quantity:-1
                            }
                            }
                            this.props.dispatch(action)
                        }}>-</button>
                    </td>
                    <td>10</td>
                </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3} align="right">
                        thanh tien: {burger.reduce((tt,item,index)=>{
                            return tt+item.quantity*10
                        },0)}
                    </td>
                </tr>
            </tfoot>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    burger:state.demoBurgerReducer.burger
})


export default connect(mapStateToProps)(Menu)