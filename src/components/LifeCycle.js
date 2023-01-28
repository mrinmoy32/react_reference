import React, { Component } from 'react'

export class LifeCycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"M.Pal"
      }
      console.log("LifeCycle: constructor");
    }

    static getDerivedStateFromProps(Props, State) {
        console.log("LifeCycle : getDerivedStateFromProps");
      return null
    }
    
    componentDidMount(){
        console.log("LifeCycle: componentDidMount"); //componentDidMount gets called at the end when all the other methods are already called.
    }

  render() {

    console.log("LifeCycle: render");

    return (
      <div>
        <h2>Learning LifeCycle Methods</h2>
      </div>
    )
  }
}

export default LifeCycle
