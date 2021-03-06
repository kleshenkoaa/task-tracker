import React from 'react';
import styles from './App.module.scss'
import classnames from 'classnames/bind'
import List from './components/List/List.js'
//import ProjectsList from './components/ProjectsList/projectsList.js'
import { DEFAULT_THEME, ThemeContext } from "./ThemeContext"
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"
import projects from './Data/projects.js'
import normalizeState from './Data/normalizeState'
import ProjectList from './components/ProjectList/ProjectList';
import Project from './components/Project/Project';
import Add from './components/Add/Add.js'

//const {projectsById, tasksById} = norm;

const {projectsById, tasksById} = normalizeState(projects)


const cx=classnames.bind(styles)

class App extends React.Component {

  state={
    theme: DEFAULT_THEME,
    projectsById,
    tasksById
  }

  handleThemeChange = event => {
    this.setState({theme: event.target.value})
  }


  render(){
    return(
      <div>{console.log(this.state.projectsById)}
      <BrowserRouter>
        <div className={cx("container", `container-theme-${this.state.theme}`)}>
          <div className={cx("radios")}>
            <div className={cx('theme')}>
            <div>
              <input 
                type="radio"
                name="theme"
                id="light"
                value="light"
                checked={this.state.theme === "light"}
                onChange={this.handleThemeChange}
              />
              <label htmlFor="light">Light theme</label>
            </div>

            <div>
              <input
                type="radio"
                name="theme"
                id="dark"
                value="dark"
                checked={this.state.theme === "dark"}
                onChange={this.handleThemeChange}
              />
              <label htmlFor="dark">Dark theme</label>
            </div>
          </div>
          
          </div>
          <ThemeContext.Provider value={this.state.theme}>
          <Route path="/" component={Header} />
            <Switch>  
              <Route exact path='/projects/' component={ProjectList}>
                <ProjectList projectsById={this.state.projectsById} tasksById={this.state.tasksById}/>
              </Route>
              <Route exact path='/tasks' component={List}>
                <List allOrCertain={0} tasksById={this.state.tasksById} />
              </Route>
              <Route exact path='/projects/:projectId/'
               render={({ 
                match 
            }) => (
                <Project match={match} projectsById={this.state.projectsById}
                tasksById={this.state.tasksById}   
                full={1}   />
            )} 
              
             >
                  
                </Route>
               <Redirect to="/" />
        </Switch>
          </ThemeContext.Provider>  
                    
          </div>
        </BrowserRouter>
        </div>
    )
}
}

const Header = () => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
        <li>
          <Link to="/tasks/">Tasks</Link>
        </li>
      </ul>
      <hr />
    </div>
  )
}


const SpecificProject = ({ match, ...args}) => {
  const { projectId } = match.params

  if (!Number(projectId)) {
    return <Redirect to="/" />
  }

  return(<ThemeContext.Consumer> 
    {theme => (
          <div>
              <div>{args.id}</div>
              <div>{args.name}</div>
              <div>{args.tasksNum}</div>
              <div> {args.full ?  <List projectId={args.id}/> : ""}</div>

            </div>
  
        )}
  </ThemeContext.Consumer>
  )

}
  
export default App;


/*
<Project projectsById={this.state.projectsById}
                            tasksById={this.state.tasksById}   
                            full={1}   
                    />

<Route exact path='/projects:id'>
                <Project projectsById={this.state.projectsById}
                         tasksById={this.state.tasksById}      
                />

              </Route> */

              /*

               <Project projectsById={this.state.projectsById}
                         tasksById={this.state.tasksById}   
                         full={1}   
                />


 <Route exact path='/projects/:projectId'>
                  <Project projectsById={this.state.projectsById}
                            tasksById={this.state.tasksById}   
                            full={1}   
                    />
                </Route> 

                */