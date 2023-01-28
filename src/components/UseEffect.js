import React, {useEffect, useState} from 'react'

export default function UseEffect() {

    
    const [Counter, setCounter] = useState(0);
    const [Counter1, setCounter1] = useState(0);

    const increment = () => {
        
        setCounter(Counter+1)
        
    }
    const decrement = () => {
        
        setCounter1(Counter1-1)
        
    }

    useEffect(() =>{
        console.log('useEffect in action')  
    }, [Counter1] ); ////this array defines that useEffect will work only when the value of "Counter1" is updated or loaded 1st time

  return (
    <div>
      {Counter}
      <button onClick={increment}>increment</button>
      <br/>
      {Counter1}
      <button onClick={decrement}>decrement</button>
    </div>
  )
}
