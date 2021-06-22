import React from 'react';
import Project from '../Project/Project.js'
//import styles from '..//..//components/List/List.module.scss'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"
import Add from '../Add/Add.js';
import projects from '..//..//Data/projects.js'
import normalizeState from '..//..//Data/normalizeState'
const {projectsById, tasksById} = normalizeState(projects)

const projs = []
  for (let projectId in projectsById) {
    const project = projectsById[projectId]
    projs.push({
        id: project.id, 
        name: project.name,
        description: project.description,
        tasksNum: project.tasksIds.length,
        tasksIds: project.tasksIds
    })
  }

class ProjectList extends React.Component  {
  state = {
    projects: projs,
    tasks: this.props.tasksById
  }

  

  addProject = ({name}) => {
    const obj = {
        id: this.state.projects.length+1,
        name: name
    }
    this.setState({projects: [...this.state.projects, obj]})
  }
 render(){
      return (
        <div>{console.log(this.state.projects)}
        <div>
        {this.state.projects.map( proj => {
              return (
                <div>
                  <Link to={`/projects/${proj.id}`}>{`/projects/${proj.id}`}
                    <Project
                      id={proj.id}
                      name={proj.name}
                      tasksNum={proj.tasksNum}
                      projectsById={this.state.projects}
                      tasksIds={proj.tasksIds}
                      tasksById={this.state.tasks}
                      full={0}
                      >
                    </Project>
                  </Link>
                  </div> 
              )
          })}
          <Add taskOrProject={0} buttonClick={this.addProject}></Add>
          </div>
          </div>
      )
}
}

 
  export default ProjectList; 
   


/*

  
 getProjects = (projects) => {
  const projs = []
  for (let projectId in projects) {
    const project = projects[projectId]
    projs.push({
        id: project.id, 
        name: project.name,
        description: project.description,
        tasksNum: project.tasksIds.length
    })
  }
  return(projs)
 }


       
                    <Project />
 id={proj.id}
                        name={proj.name}
                        tasksNum={proj.tasksNum}
                        full={0}
                        */