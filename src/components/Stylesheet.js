import React from 'react'
import './Styles.css'

function Stylesheet(props) {
    const className = props.isValue ? 'demo' : 'demo1' ;
  return (
    <div>
      <h1 className={`${className} demo2`}>Hello Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
