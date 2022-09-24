import React from 'react';
import { ThemeContext } from '../../ThemeContext';
import classnames from 'classnames/bind'
import styles from './Add.module.scss'

const cx=classnames.bind(styles)

/**
@file Add.h
The $Add class
@brief This class adds tasks and projects to the list
*/
class Add extends React.Component {
    
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
    const flg = this.props.taskOrProject

/*!
*
* @brief Метод добавления задачи или проекта
* @param flg Флаг выбора задачи или проекта. 1 - задача, 0 - проект
*
*/
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