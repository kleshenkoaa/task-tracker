import React from 'react';
import { ThemeContext } from '../../ThemeContext';
import classnames from 'classnames/bind'
import styles from './Add.module.scss'

const cx=classnames.bind(styles)

const INITIAL_BUTTONS = {
    name: "",
    description: ""
}
class Add extends React.Component {
    state = INITIAL_BUTTONS
    
  
    onChange = (event) => {
        const {value, name} = event.currentTarget
        const newState = {...this.state, [name]: value}
        this.setState(newState)
    }

    onClick = () => {
        this.props.buttonClick(this.state)
        this.setState(INITIAL_BUTTONS)
    }

/*
    onClick = (event) => {
      const newTaskId = ++Object.keys(this.props.tasks)[Object.keys(this.props.tasks).length+1] // id новой таски = id последней + 1

      return [ 
        this.props.dispatchAddItem(newTaskId, this.state.name, this.state.description) ]
    } */
  
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
                        onClick={this.onClick}
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
                            onClick={() => {
                                this.props.buttonClick(this.state)
                            }}>
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

  export default Add;