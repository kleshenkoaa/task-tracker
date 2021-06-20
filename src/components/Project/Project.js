import React from 'react';
import styles from './Project.module.scss'
import classnames from 'classnames/bind'
import {ThemeContext} from "..//..//ThemeContext"
import List from '..//..//components/List/List.js'
import {useParams} from 'react-router-dom'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"

const cx=classnames.bind(styles)

const SpecificProject = ({ match }) => {
      const { projectId } = match.params
    
      if (!Number(projectId)) {
        return <Redirect to="/" />
      }
    
      return (
        <div>
          <h2>Specific Project {projectId}</h2>
        </div>
      )
    }
//const Project = ({id, full, projectsById, tasksById}) => {
const Project = (props) => {
      console.log(props)
      if (props.match) {
            if (!Number(props.match.params.projectId)) {
                  console.log('his')
                  return <Redirect to="/" />
                }
            else {
                  console.log(props)
                  const project = props.projectsById[props.match.params.projectId]

                  const projectName = project?.name
                  const tasksIds = project?.tasksIds
                  console.log(tasksIds)
                  const tasks = tasksIds?.map( taskId => props.tasksById[taskId] )
                  
            return(<ThemeContext.Consumer> 
                  {theme => (
                        <div>
                              <div>{props.match.params.projectId}</div>
                              <div>{projectName}</div>
                              <div>Tasks' ids: {tasksIds}</div>
                              <div> {props.full ?  <List 
                              tasksList={tasks}
                              allOrCertain={1}
                              /> : ""}</div>
      
                        </div>
                  
                        )}
                  </ThemeContext.Consumer>
                  )
           }

      }
      else {
            return(<ThemeContext.Consumer> 
                  {theme => (
                        
                        <div>
                              <div>{props.id}</div>
                              <div>{props.name}</div>
                              <div>Tasks' ids: {props.tasksIds}</div>
                        </div>
                        )}
                  </ThemeContext.Consumer>
                  )
      }
     
}

   export default Project;
