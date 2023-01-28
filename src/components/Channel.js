import React from "react";

class Channel extends React.Component{

constructor(){
    super();
    this.state = {
        msg: 'Hello ReactJS'
    }
}

learnMore(){
    this.setState ({
        msg: 'Thanks for visitig us'
    })
}

    render(){
        return(
            <>
            <h1>{this.state.msg}</h1>
            <button onClick={() =>{this.learnMore()}}>Learn more</button>
            </>
        )
    }
}

export default Channel;