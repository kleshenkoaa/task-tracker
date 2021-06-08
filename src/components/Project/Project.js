import React from 'react';
import styles from './Project.module.scss'
import classnames from 'classnames/bind'
import {ThemeContext} from "..//..//ThemeContext"
import {List} from '..//..//components/List/List.js'
import {useParams} from 'react-router-dom'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"
import { connect } from 'react-redux'

const cx=classnames.bind(styles)

const mapStateToProps = (state) => {
return(
      {
      projects: state.projectsByIds.projects,
      tasks: state.tasksByIds.tasks,
      theme: state.theme.theme
      }
      )
  }

const ProjectComponent = ({id, full, projects, tasks}) => {
      const project = projects[id]
      const projectName = project?.name
      const tasksIds = project?.tasksIds
      console.log(tasksIds)
      const tasksss = tasksIds.map( taskId => tasks[taskId] )
      console.log(tasksss)
     return(
              <div>
                  <div>{id}</div>
                  <div>{projectName}</div>
                  <div>Tasks' ids: {tasksIds}</div>
                  <div> {full ?  <List 
                  tasksList={tasksss}
                  allOrCertain={1}
                  projectId={id}
                  /> : ""}</div>
                </div>
      )}

export const Project = connect(mapStateToProps)(ProjectComponent) 
