import React from 'react';

import styles from './List.module.scss'

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
            }
            return it})
   
        this.setState({data:newData})
        }      
    

    render() {
        return (
            <div>
                <div className={styles.content}>
                    {this.state.data.map(it => <Item class={styles.input} id={it.id}
                                                    name={it.name}
                                                    description={it.description}
                                                    completed={it.completed}
                                                    index={this.state.data.findIndex((el) => el.id === it.id)}
                                                    onChangeTask={this.onChangeTask}
                                                    />)}
                    
                </div>
                <AddTask class={styles.input} buttonClick={this.addTask}/>
            </div>
        )
    }
  }

  export default List;