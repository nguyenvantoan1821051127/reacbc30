import React, { Component } from 'react'
import { connect } from 'react-redux'
import Burger from './Burger'
import Menu from './Menu'
import './DemoBurger.css';

class DemoBurger extends Component {
  render() {
    return (
      <div className='container'>
        <h3>bai tap burger</h3>
        <div className="row">
            <div className="col-6">
                <Burger></Burger>
            </div>
            <div className="col-6">
                <Menu></Menu>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps, )(DemoBurger)