import React from 'react'

function FunctionClick() {

    function changeEvent(e){
      e.preventDefault();
        console.log('Click Me button pressed')
    }

  return (
    <React.Fragment> 
        <button onClick={changeEvent}>
            click Me
        </button>
        <a href='https://www.google.com' onClick={changeEvent}>
            click Me- preventDefault
        </a>
      
    </React.Fragment>
  )
}

export default FunctionClick
