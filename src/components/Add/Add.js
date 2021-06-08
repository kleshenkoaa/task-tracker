import React from 'react';
import { ThemeContext } from '../../ThemeContext';
import classnames from 'classnames/bind'
import styles from './Add.module.scss'
import {handleAddItem, handleAddItemInProject} from "../../actions/Item";
import {handleAddProject, handleProjectTaskAdd} from "../../actions/Project";
import { connect } from 'react-redux';

const cx=classnames.bind(styles)

const INITIAL_BUTTONS = {
    name: "",
    description: "",
    projectId: -1
}

const mapStateToProps = (state) => ({
    tasks: state.tasksByIds.tasks,
    projects: state.projectsByIds.projects
  })

const mapDispatchToProps = (dispatch) => ({
    dispatchAddItem: (id, name, desc) => dispatch(handleAddItem(id, name, desc)),
    dispatchAddItemInProject: (projectId, id, name, desc) => dispatch(handleProjectTaskAdd(projectId, id, name, desc)),
    dispatchAddProject: (id, name) => dispatch(handleAddProject(id, name))
   })

class AddComponent extends React.Component {
    state = INITIAL_BUTTONS
    
  
    onClickAddEvent = ({name, description}) => {
        const obj = {
          id: Object.entries(this.props.tasks).length + 1,
          name: name,
          description: description,
          completed: false
        }
        console.log("add event", obj)
        this.props.dispatchAddItem(obj.id, obj.name, obj.description)
    }

    onClickAddEventProject = ({name}) => {
        const proj = {
          id: Object.entries(this.props.projects).length + 1,
          name: name,
          taskIds: []
        }
        console.log("add event", proj)
        this.props.dispatchAddProject(proj.id, proj.name)
    }

    onClickAddEventTaskProject = (event) => {
    const itemId = Object.entries(this.props.tasks).length + 1
    const projectId = this.props.projectId
    console.log('add event', itemId, projectId, this.state.name)
    return (
        this.props.dispatchAddItemInProject(projectId, itemId, this.state.name, this.state.description)
    )
  }
    

    onChange = (event) => {
        const {value, name} = event.currentTarget
        const newState = {...this.state, [name]: value}
        this.setState(newState)
    }
    confirmAddClick = () => {
        console.log(this.state)
        this.onClickAddEvent(this.state)
        this.setState(INITIAL_BUTTONS)
    }

    confirmAddClickProject = () => {
        console.log(this.state)
        this.onClickAddEventProject(this.state)
        this.setState(INITIAL_BUTTONS)
    }

    confirmAddClickTaskProject = () => {
        console.log(this.state)
        this.onClickAddEventTaskProject(this.state)
        this.setState(INITIAL_BUTTONS)
    }


  
    render() {
    const flg = this.props.taskOrProject
       if (flg && !this.props.projectId) { //1 - task
            return (
        <ThemeContext.Consumer>
            {
           theme => ( 
          <div className={cx("container", `container-theme-${theme}`)}>
            <h2>Add task</h2>
            <div class="inputStyle">
                <div class="inputInnerStyle">
                    Name:
                    <input value={this.state.name} name="name" onChange={this.onChange}/>
                </div>
                <div class="inputInnerStyle">
                    Description:
                    <input value={this.state.description} name="description" onChange={this.onChange}/>
                </div>
                <button 
                        onClick={this.confirmAddClick}
                        >
                    Addeeer
                </button>
            </div>
            </div>
           )
            }
        </ThemeContext.Consumer>
        )
    }
    else if (flg && this.props.projectId) {
        return (
            <ThemeContext.Consumer>
                {
               theme => ( 
              <div className={cx("container", `container-theme-${theme}`)}>
                <h2>Add task</h2>
                <div class="inputStyle">
                    <div class="inputInnerStyle">
                        Name:
                        <input value={this.state.name} name="name" onChange={this.onChange}/>
                    </div>
                    <div class="inputInnerStyle">
                        Description:
                        <input value={this.state.description} name="description" onChange={this.onChange}/>
                    </div>
                    <button 
                            onClick={this.confirmAddClickTaskProject}
                            >
                        Add
                    </button>
                </div>
                </div>
               )
                }
            </ThemeContext.Consumer>
            )
    }
    else {  //0-project
        return (
            <ThemeContext.Consumer>
                {
               theme => ( 
              <div className={cx("container", `container-theme-${theme}`)}>
                <h2>Add project</h2>
                <div class="inputStyle">
                    <div class="inputInnerStyle">
                        Name:
                        <input value={this.state.name} name="name" onChange={this.onChange}/>
                    </div>
                    <button 
                             onClick={this.confirmAddClickProject}>
                        Add
                    </button>
                </div>
                </div>
               )
                }
            </ThemeContext.Consumer>
            )
    }
    }
  }

  export const Add = connect(mapStateToProps, mapDispatchToProps)(AddComponent);