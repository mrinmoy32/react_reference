import React , {useState} from 'react';


function UseStateWithPrevState() {

    const [counter, setcounter] = useState(0);

    const incrementBy10 = ()=>{
         setcounter(precount => precount +10)
    };


  return (
    <div>
        <button onClick={incrementBy10}>increment by 10 {counter}</button>
      
    </div>
  )
}

export default UseStateWithPrevState
