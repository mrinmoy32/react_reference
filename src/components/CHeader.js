import React from "react";
import Testing from "./Testing";

class CHeader extends React.Component{

    state = {
        users:[
            {id:1, name:'brain', class:'A'},
            {id:2, name:'fernando', class:'B'}
        ]
    }

    render(){

       const data = this.state.users.map(function (abc){
           return <li key={abc.id}>{abc.class}</li> //key has to be unique always
           
        });
        
        return(
            <div>
                <h2>This is a created class compoenent - Hello {this.props.name} {this.props.last} </h2>
                <h3>{this.state.users[0].name}</h3>
                <h3><ol>{data}</ol></h3>
                {console.log("used Id:" + this.state.users[0].id)}
                {/* we used Id from the array 'user' from state as attribute for the component Testing */}
                <Testing userId={this.state.users[0].id}/>             
            </div>
            
        );
        
    }
}

export default CHeader;