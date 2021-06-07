import React from 'react';
import {Project} from '../Project/Project.js'
//import styles from '..//..//components/List/List.module.scss'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"
import Add from '../Add/Add.js';
import { connect } from 'react-redux'
import projects from '..//..//Data/projects.js'
import normalizeState from '..//..//Data/normalizeState'
/* const {projectsById, tasksById} = normalizeState(projects)

const projs = []
  for (let projectId in projectsById) {
    const project = projectsById[projectId]
    projs.push({
        id: project.id, 
        name: project.name,
        description: project.description,
        tasksNum: project.tasksIds.length
    })
  }
  */

  const mapStateToProps = (state) => {
    return({projects: state.projectsByIds.projects})
}


const ProjectListComponent = ({projects}) => {
  
/*
  addProject = ({name}) => {
    const obj = {
        id: this.state.projects.length+1,
        name: name
    }
    this.setState({projects: [...this.state.projects, obj]})
  } */

        return (
          <div>{Object.values(projects).map( proj => {
          return (
            <div>
              <div>
                <Link to={`/projects/${proj.id}`}>{`/projects/${proj.id}`}
                  <Project
                    id={proj.id}
                    name={proj.name}
                    tasksNum={proj.tasksNum}
                    full={0}>
                  </Project>
                </Link>
                </div> 
              </div>
          )
        })
       }
       <Add taskOrProject={0}></Add>
       </div>
        ) }
export const ProjectList = connect(mapStateToProps)(ProjectListComponent) 


// <Add taskOrProject={0} buttonClick={this.addProject}></Add>


 // export default ProjectList; 
   


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