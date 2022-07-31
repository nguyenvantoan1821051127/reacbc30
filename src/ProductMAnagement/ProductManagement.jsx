import React, { Component } from 'react'
import FromProduct from './FromProduct'
import TableProduct from './TableProduct'

export default class ProductManagement extends Component {
  render() {
    return (
      <div>
        <h3>productnaement</h3>
        <FromProduct></FromProduct>
        <TableProduct></TableProduct>
      </div>
    )
  }
}
