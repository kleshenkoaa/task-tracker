import React from 'react';

import styles from './List.module.scss'

import {Item} from '..//..//components/Item/Item.js'
import {Add} from '../Add/Add.js'
import {Redirect} from 'react-router-dom'
import normalizeState from '..//..//Data/normalizeState'
import {handleAddItem, handleAddItemInProject, handleChangeItem} from "../../actions/Item";
import {handleProjectTaskAdd} from "../../actions/Project";
import { connect } from 'react-redux'

    
const mapStateToProps = (state) => ({
  tasks: state.tasksByIds.tasks,
  projects: state.projectsByIds.projects,
  theme: state.theme.theme
})

 const mapDispatchToProps = (dispatch) => ({
  dispatchAddItem: (id, name, desc) => dispatch(handleAddItem(id, name, desc)),
  dispatchAddItemInProject: (projectId, id, name, desc) => dispatch(handleProjectTaskAdd(projectId, id, name, desc)),

 })

 const onClickAddEvent = ({name, description}) => {
  const obj = {
    id: Object.entries(this.props.tasks).length + 1,
    name: name,
    description: description,
    completed: false
  }
  this.props.dispatchAddItem(obj.id, obj.name, obj.description)
  console.log('11')
}

const onClickAddEventTaskProject = ({name, description}) => {
  const obj = {
    id: Object.entries(this.props.tasks).length + 1,
    name: name,
    description: description,
    completed: false, 
    projectId: Object.entries(this.props.projectId)
  }
  this.props.dispatchAddItemInProject(obj.id, obj.name, obj.description, obj.projectId)
  console.log('pip1')
}


const ListComponent = ({
  projectId, 
  projects, 
  tasks, 
  allOrCertain,
  dispatchAddItem, 
  ddispatchAddItemInProject
                  }) => { //1 - certain 0 all

    console.log('its rendernimg list full', tasks, projects)

    if (allOrCertain) {
      const searchForTask = (Ids, taskList) => {
        const specificTasksList = {}
        Object.values(Ids)?.map( taskId => {
            return Object.values(taskList).map( (task) => {
                return task.id.toString() === taskId.toString() 
                ? specificTasksList[taskId] = task
                : null
            })
        })
        return specificTasksList
        }
        const projectTasksIds = projects[projectId]?.tasksIds
        const projectTasks = searchForTask(projectTasksIds, tasks)
        return (
          <div>{
          Object.values(projectTasks).map( task => {
              return (
                  <Item id={task.id} class={styles.input}/>
              )
          })} 
           <Add taskOrProject={1} tasks={projectTasks} projectId={projectId} onCLick={onClickAddEventTaskProject}></Add>
           <p>{console.log('aaaaaa')}</p>
          </div>
      )
    }
    else {
        return(
          <div>
          { Object.values(tasks).map( task => {
            return (
                <Item id={task.id} class={styles.input}/>
            )
          })}
          <Add taskOrProject={1} tasks={tasks} onCLick={onClickAddEvent}></Add>
          <p>{console.log('pppp')}</p>
        </div>
        )
  }
}
export const List = connect(mapStateToProps, mapDispatchToProps)(ListComponent) 