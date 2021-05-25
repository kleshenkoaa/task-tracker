import React from 'react';
import { ThemeContext } from '../../ThemeContext';
import classnames from 'classnames/bind'
import styles from './AddTask.module.scss'

const cx=classnames.bind(styles)

class AddTask extends React.Component {

    state = {
      name: "",
      description: ""
    }
  
    onChange = (event) => {
        const {value, name} = event.currentTarget
        const newState = {...this.state.buttons, [name]: value}
        this.setState(newState)
    }
  
    render() {
        return (
        <ThemeContext.Consumer>{
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

  export default AddTask;