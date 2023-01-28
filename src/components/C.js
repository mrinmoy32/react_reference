import React, { Component } from 'react'
import { Consumer } from './context'

export class C extends Component {
  render() {
    return (
      <div>
        <h2>Now lets understand Context API</h2>
        <h1>{this.props.name} is printed by passing name from A to B to C Component using state object.</h1>
        <h1>{this.props.animal} is printed by passing name from A to B to C Component using kalu :) as a object.</h1>
        <Consumer>{data => <h3>{data}</h3>}</Consumer>
        
      </div>
    )
  }
}

export default C
