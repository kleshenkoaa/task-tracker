import React from 'react';
import {Project} from '../Project/Project.js'
//import styles from '..//..//components/List/List.module.scss'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"
import {Add} from '../Add/Add.js';
import { connect } from 'react-redux'
import projects from '..//..//Data/projects.js'
import normalizeState from '..//..//Data/normalizeState'


  const mapStateToProps = (state) => {
    return({projects: state.projectsByIds.projects})
}


const ProjectListComponent = ({projects}) => {

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