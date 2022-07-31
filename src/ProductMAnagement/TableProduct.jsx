import React, { Component } from 'react'

export default class TableProduct extends Component {
  render() {
    return (
      <table className='table'>
        <thead>
            <th>id</th>
            <th>img</th>
            <th>price</th>
            <th>name</th>
            <th>type</th>
            <th>description</th>
        </thead>
        <tbody>
            <td>id</td>
            <td><img src='https://picsum.photos/50/50'alt='1' /></td>
            <th>prfjdls</th>
            <td>moble</td>
            <td>1000</td>
            <td>
                <button className='btn btn-danger mx-2'>Delete</button>
                <button className='btn btn-primary mx-2'>Update</button>
            </td>
        </tbody>
      </table>
    )
  }
}
