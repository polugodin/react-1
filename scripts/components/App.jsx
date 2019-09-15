import React, {Component} from 'react';

import Counter from './Counter.jsx';
import List from './List.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: 'hello world',
            list: [
                { task: 'todo something'},
                { task: 'todo something2'},
                { task: 'todo something3'},
                { task: 'todo something4'}
            ]
        }
    }

    render() {
        const { msg, list } = this.state;

        return (
            <div>
                <Counter msg={msg}/>
                <List list={list} />
            </div>
        );
    }
}

export default App;
