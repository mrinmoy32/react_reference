import React, { Component } from 'react'

 class Product extends Component {
  render() {
    return (
      <div>
        <Cart></Cart>
        
      </div>
    )
  }
}

export default Product;


export class Cart extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         qty:0,
      }
    }
    

  render() {
    return (
      <div>
        
      </div>
    )
  }
}



