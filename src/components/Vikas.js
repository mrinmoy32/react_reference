import React from 'react'

export class Vikas extends React.Component {

state={
    marks:0
}

 marksIncremented = ()=>{
    this.setState({marks:this.state.marks + 1})
}

  render() {
    return (
      <div>
        <h2 onMouseOver={this.marksIncremented}>Vikas's marks: {this.state.marks}</h2>        
      </div>
    )
  }
}

export default Vikas
