import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: props.list,
            count: 0
        };
    }

    render() {
        const { list } = this.props;
        
        return (
            <div>
                <h2>Task List</h2>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={index}>{item.task}</li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List;