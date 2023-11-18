import React, {useReducer} from 'react'

function UseReducerHooks() {

const [quantity, setQuantity]  = useReducer(
    (quantity)=>quantity+1,0)

  return (
    <div>
        <h3>UseReducerHooks</h3>
        <p>{quantity}</p>
        <button onClick={()=>setQuantity()}>+</button>
    </div>
  )
}

export default UseReducerHooks