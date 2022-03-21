import React, {Component} from "react";
import './Counter.css';
class Counter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment () {
    //     this.setState({
    //         count : this.state.count + 5
    //     }, () => {console.log('Callback value' , this.state.count)}
    //     )
    //     console.log(this.state.count)
    // }

    this.setState((prevState, props) => ({
        count: prevState.count + 1
    }))
    console.log(this.state.count)
}

    incrementFive () {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render () {
        return (
            <div>
            <div >Counter - {this.state.count}</div>
            <button className="new-counter" onClick={() => this.increment()}>Increment 1</button>
            <button className="new-counter" onClick={() => this.incrementFive()}>Increment 5</button>
            </div>
        )
    }
}

export default Counter;