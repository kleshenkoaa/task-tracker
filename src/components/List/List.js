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
            id: this.state.data.length+1,
            name: name,
            description: description,
            completed: false
        }
        this.setState({data: [...this.state.data, obj]})
    }
  
    onChangeTask = (id) => {
        const newData = this.state.data.map(it => {
            if (it.id === id) {
                it.completed = !it.completed
                console.log(it)
            }
            return it})
        console.log(newData) // for checking
        this.setState({data:newData})
        }      
    

    render() {
        return (
            <div class="content">
                {this.state.data.map(it => <Item class="input" id={it.id}
                                                 name={it.name}
                                                 description={it.description}
                                                 completed={it.completed}
                                                 index={this.state.data.findIndex((el) => el.id === it.id)}
                                                 onChangeTask={this.onChangeTask}
                                                 />)}
                <AddTask class="input" buttonClick={this.addTask}/>
            </div>
        )
    }
  }

  export default List;