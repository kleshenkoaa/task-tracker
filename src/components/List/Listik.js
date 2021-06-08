import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Task} from './Task/Task'

const mapStateToProps = (state) => {
    return({
        tasks: state.tasksByIds.tasks,
        projects: state.projectsByIds.projects
    })
}

const TaskListComponent = ( {projectId, projects, tasks} ) => {
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
                    <Task
                        key={task.id}
                        id={task.id}
                    />
                )
            })
        )
    }
    else {
        return (<Redirect to='/404'/>)
    }
}

export const TaskList = connect(mapStateToProps)(TaskListComponent) 