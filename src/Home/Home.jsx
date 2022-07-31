//rcc
import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Navication from './Navication'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <section className='d-flex vh-75'>
            <div className='w-25'>
                <Navication></Navication>
            </div>
            <div className='w-75'>
                <Content></Content>
            </div>
        </section>
        <footer>
            <Footer></Footer>
        </footer>
      </div>
    )
  }
}
