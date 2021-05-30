import React from 'react';
import styles from './Project.module.scss'
import classnames from 'classnames/bind'
import {ThemeContext} from "..//..//ThemeContext"
import List from '..//..//components/List/List.js'
import {useParams} from 'react-router-dom'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"

const cx=classnames.bind(styles)

const Project = ({id, full, projectsById, tasksById}) => {
      console.log(id)
      const project = projectsById[id]
      const projectName = project?.name
      const tasksIds = project?.tasksIds
      const tasks = tasksIds?.map( taskId => tasksById[taskId] )
     return(<ThemeContext.Consumer> 
        {theme => (
              <div>
                  <div>{id}</div>
                  <div>{projectName}</div>
                  <div>Tasks' ids: {tasksIds}</div>
                  <div> {full ?  <List 
                  tasksList={tasks}
                  allOrCertain={1}
                  /> : ""}</div>

                </div>
      
            )}
      </ThemeContext.Consumer>
      )
}
   export default Project;
