import React from 'react';
import { ThemeContext } from '../../ThemeContext';
import classnames from 'classnames/bind'
import styles from './Add.module.scss'
import {handleAddItem} from "../../actions/Item";
import {handleAddProject} from "../../actions/Project";
import { connect } from 'react-redux';

const cx=classnames.bind(styles)

const INITIAL_BUTTONS = {
    name: "",
    description: ""
}

const mapStateToProps = (state) => ({
    tasks: state.tasksByIds.tasks,
    projects: state.projectsByIds.projects
  })

const mapDispatchToProps = (dispatch) => ({
    dispatchAddItem: (id, name, desc) => dispatch(handleAddItem(id, name, desc)),
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

  
    render() {
    const flg = this.props.taskOrProject
       if (flg) { //1 - task
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