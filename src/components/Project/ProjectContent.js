import React from 'react';
import Project from '../Project/Project.js'
//import styles from '..//..//components/List/List.module.scss'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"


const ProjectContent = (project) => {
  const tasks = []
    for (let taskId in project.taskIds) {
      const task = project.taskIds[taskId]
      tasks.push({
          id: task.id,
          name: task.name,
          description: task.description,
          completed: task.completed
      })
    }

  if (tasks) {
      return (
        tasks.map( task => {
              return (
                <Link to={`/tasks/:${task.id}`}>
                    <Item>
                      id={task.id},
                      name={task.name},
                      description={task.description},
                      completed={task.completed},
                    </Item>
                </Link>
              )
          })
      )
  }
  else {
      return (<Redirect to='/404'/>)
  }
}
 
  export default ProjectList; 
   




/*
class ProjectContent extends React.Component {
    render() {
      const tasks = this.props.tasks
      const projectId = this.props.projectId
      const projectName = this.props.projectName
  
      return (
        <> 
         
          <div>
            <TaskAdd
                projectId={projectId}
                taskAddHandler={this.props.taskAddHandler}
            />
            <List
                tasksList={tasks}
                onClick={this.props.changeTaskStatusHandler}
            />
          </div>
        </>
      )    
    }
  }
  
  export default ProjectContent;
  */