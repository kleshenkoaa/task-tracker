import React from 'react';

import styles from './List.module.scss'

import {Item} from '..//..//components/Item/Item.js'
import Add from '..//..//components/Add/Add.js'

import data from '..//..//Data/tasks.js'

import {Redirect} from 'react-router-dom'
import projects from '..//..//Data/projects.js'
import normalizeState from '..//..//Data/normalizeState'
import { render } from '@testing-library/react';
import {handleAddItem, handleChangeItem} from "../../actions/Item";

import { connect } from 'react-redux'
const {projectsById, tasksById} = normalizeState(projects)

  const tasks = []
  for (let taskId in tasksById) {
    const task = tasksById[taskId]
    tasks.push({
        id: task.id,
        name: task.name,
        description: task.description,
        completed: task.completed
    })
} 
    
const mapStateToProps = (state) => ({
  tasks: state.tasks.tasksById,
  projects: state.tasks.projectsById,
  theme: state.theme.theme
})

 const mapDispatchToProps = (dispatch) => ({
   dispatchAddItem: (newItem) => dispatch(handleAddItem(newItem)),
   dispatchChangeItem: (item) => dispatch(handleChangeItem(item))
 })

const ListComponent = ({projectId, projects, tasks}) => {
  
  const searchForTask = (tasksIds, tasksList) => {
    const specificTasksList = {}
    Object.values(tasksIds)?.map( taskId => {
        return Object.values(tasksList).map( (task) => {
            return task.id.toString() === taskId.toString() 
            ? specificTasksList[taskId] = task
            : null
        })
    })
    return specificTasksList
  }

  const projectTasksIds = projects[projectId]?.tasksIds
  const projectTasks = searchForTask(projectTasksIds, tasks)

  if (projectTasks) {
    return (
        Object.values(projectTasks).map( task => {
            return (
                <Item id={task.id} class={styles.input}/>
            )
        })
    )
}
else {
    return (<Redirect to='/404'/>)
}
}

  /*
  state ={
    data: [],
    certainTasks: this.props.tasksList,
    allOrCertain: this.props.allOrCertain
  }
  
  addTask = ({name, description}) => {
    const obj = {
        id: this.state.data.length+1,
        name: name,
        description: description,
        completed: false
    }
    this.setState({data: [...this.state.data, obj]})
} */
/*
onChangeTask = (id) => {
    const newData = this.state.data.map(it => {
        if (it.id === id) {
            it.completed = !it.completed
        }
        return it})
    this.setState({data:newData})
    }
    
    onChangeCertainTask = (id) => {
      const newD = this.state.certainTasks.map(it => {
          if (it.id === id) {
              it.completed = !it.completed
          }
          return it})
      this.setState({certainTasks:newD})
      }  

      addCertainTask = ({name, description}) => {
        const obj = {
              id: this.state.data.length+1,
              name: name,
              description: description,
              completed: false}
            this.setState({certainTasks: [...this.state.certainTasks, obj]})
        }  */ 
/*
 render(){
  if (this.state.allOrCertain) //0 - all 1 - certain
        return (
            <div>
                <div>
                    {this.state.certainTasks.map(it => <Item class={styles.input} id={it.id}
                                                    name={it.name}
                                                    description={it.description}
                                                    completed={it.completed}
                                                    onChangeTask={this.onChangeCertainTask}
                                                    index={this.state.certainTasks.findIndex((el) => el.id === it.id)}
                                                    />)}
                    
                </div>
                <Add taskOrProject={1} class={styles.input} buttonClick={this.addCertainTask}/>

            </div>
            
        )
  else if (!this.state.allOrCertain) {
    return(
      <div>
        <div>{console.log(this.state.data)}</div>
        <div>
             {this.state.data.map(it => <Item class={styles.input}  id={it.id}
                                                    name={it.name}
                                                    description={it.description}
                                                    completed={it.completed}
                                                    index={this.state.data.findIndex((el) => el.id === it.id)}
                                                    onChangeTask={this.onChangeTask}
                                                    />)}
                    
          </div>
          <Add class={styles.input} taskOrProject={1} buttonClick={this.addTask}/>
      </div>
    )
}
}}


  export default List;

*/

export const List = connect(mapStateToProps)(ListComponent) 