import React from 'react';
import Project from '../Project/Project.js'
//import styles from '..//..//components/List/List.module.scss'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"


const ProjectPage = ({projectsById, tasksById}) => {
 
    const { projectId } = useParams() // получаем id проекта из URL
    const project = projectsById[projectId]
    const projectName = project?.name
    const tasksIds = project?.tasksIds
    const tasks = tasksIds?.map( taskId => tasksById[taskId] )

    return (
        <ThemeContext.Consumer>
            {theme => {
                return (
                  <Project
                      projectId={projectId}
                      projectName={projectName}
                      tasks={tasks}
                      full={0}
                                        />
                )
            }}
        </ThemeContext.Consumer>
    )
}


 
  export default ProjectPage; 
   
  /*

  
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

    return(
    <BrowserRouter>
        <Route exact path='/projects:projectId'></Route> 
        <ProjectContent
            projectId={projectId}
            projectName={projectName}
            tasks={tasks}
            taskAddHandler={taskAddHandler}
            changeTaskStatusHandler={changeTaskStatusHandler}
        />
    </BrowserRouter>
    )
}
*/