import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <div>
        <form>
            
            <label>User Name</label>
            <br/>
            <input type='text' placeholder='Please Enter Full Name'></input>
           
            
        </form>
      </div>
    )
  }
}

export default Form;
