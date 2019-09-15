import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: props.msg,
            count: 0    
        };

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onIncrease() {
        this.setState({ count: this.state.count + 1 })
    }

    onDecrease() {
        this.setState({ count: this.state.count - 1 })
    }
    
    onReset() {
        this.setState({ count: 0 })
    }

    render() {
        const {count, msg} = this.state;
        const {onIncrease, onDecrease, onReset} = this;
        
        return (
            <div>
                <h2>Counter: {count}</h2>
                <button onClick={onIncrease}>increase</button>
                <button onClick={onDecrease}>decrease</button>
                <button onClick={onReset}>reset</button>
                <h2>Counter message: {msg}</h2>
            </div>
        )
    }
}

export default Counter;