import React, {useReducer} from 'react'



function UseReducerDispatchActions() {
    const initialState = {
        userCount: 0,
        adminCount: 0
    }
    
    const reducer = (state, action) => {
        switch(action.type){
            case "increment": 
            return{
                userCount: state.userCount+1,
                adminCount: state.adminCount+1
            };
            case "decrement": 
            return{
                userCount: state.userCount-1,
                adminCount: state.adminCount-1
            };
            
        }
          
    }
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

  return (
    <div>
        <h4>UseReducerDispatchActions</h4>
        <p>User Count: {state.userCount}</p>
        <p>admin Count: {state.adminCount}</p>
        <button onClick={()=>dispatch({type: "increment"})}>increment</button>
        <button onClick={()=>dispatch({type: "decrement"})}>decrement</button>
    </div>
  )
}

export default UseReducerDispatchActions