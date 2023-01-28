import React, { Component } from 'react'

export class CFunctionClick extends Component {

    constructor(props) {
        super(props);
        this.changeEvent = this.changeEvent.bind(this);

        this.state = {
            course: "B.Tech",
            roll: this.props.roll
        }
    }

    changeEvent() {
        console.log('button pressed- event handing in class component', this.state.course)
        //to access this keywork either use changeEvent as arrow function or create a constructor and use bind;
        this.setState({
            course: "M.Tech"
        })

        console.log(this.state.course);
    }
    render() {

        // const numbers = [3, 4, 5, 6];
        const numbers = this.props.num;
        const newNumbers = numbers.map( (numbers) => {
            return <li key={numbers}>{numbers}</li> //key has to be unique always
        })


        return (
            <div>
                <button onClick={this.changeEvent}>Click Me - Class component</button>
                <h3>{this.state.course}</h3>
                <h3>{this.props.roll}</h3>
                <ul>{newNumbers}</ul>

            </div>
        )
    }
}

export default CFunctionClick
