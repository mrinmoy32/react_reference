import React , {useState} from 'react';


function UseStateWithPrevState() {

    const [counter, setcounter] = useState(0);

    const incrementBy10 = ()=>{
      
        for(let i=0; i<10; i++) {
          setcounter(precount => precount +1)
        }
        
        
    };


  return (
    <div>
        <button onClick={incrementBy10}>increment by 10 {counter}</button>
      
    </div>
  )
}

export default UseStateWithPrevState
