import React, { Component } from 'react'
import C from './C'
//import {myConstext} from './A';

import { Consumer } from './context'

export class B extends Component {
  render() {
    return (
      <div>
        <Consumer>{data => <h3>{data}</h3>}</Consumer>
        <C name={this.props.name} animal={this.props.animal}></C>
      </div>
    )
  }
}

export default B
