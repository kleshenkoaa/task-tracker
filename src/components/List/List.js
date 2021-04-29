import React from 'react';
import './List.css';
import Item from '..//..//components/Item/Item.js'
import AddTask from '..//..//components/AddTask/AddTask.js'

import data from '..//..//Data/tasks.js'

class List extends React.Component {

    state = {
        data: data,
    }
  
    addTask = ({name, description}) => {
        const obj = {
            id: this.state.data.length,
            name: name,
            description: description,
            completed: "false"
        }
        this.setState({data: [...this.state.data, obj]})
        this.lastId += 1
    }
  
    render() {
        return (
            <div class="content">
                {this.state.data.map(it => <Item class="input" id={it.id}
                                                 name={it.name}
                                                 description={it.description}
                                                 completed={it.completed}/>)}
                <AddTask class="input" buttonClick={this.addTask}/>
            </div>
        )
    }
  }

  export default List;