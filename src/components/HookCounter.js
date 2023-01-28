import React, { useState } from 'react'

export function HookCounter() {

    // const channelName = useState("React Coding");

    // const stateHandler = () =>{
    //     channelName[1]('Mrinmoy Pal')
    // }

    const [name, setName] = useState("React Coding");
    const [Counter, setCounter] = useState(0); //we can implement this counter using a different function and button also

    const stateHandler = () => {
        setName('Mrinmoy Pal');
        setCounter(Counter+1)
    }
    

    return (
        <div>
            <h1>Array Destructuring</h1>
            {name} 
            <br/>
            
            <div>
                <button onClick={stateHandler}>buttonUseState and Counter: {Counter}</button>

            </div>
            
        </div>
    )
}
