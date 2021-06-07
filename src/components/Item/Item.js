import React from 'react';
import styles from './Item.module.scss'
import classnames from 'classnames/bind'
import {ThemeContext} from "..//..//ThemeContext"

import { connect } from "react-redux";
import Add from '../Add/Add';

const cx=classnames.bind(styles)

const mapStateToProps = (state) => ({
  tasks: state.tasksByIds.tasks
})

const ItemComponent = ({id, tasks}) => {
  const itemic = {
    name: tasks[id].name,
    description: tasks[id].description,
    completed: tasks[id].completed
  }

      return(<ThemeContext.Consumer> 
        {theme => (
              <div className={cx("box",`box-theme-${theme}`)}>
                  <div class={cx("id", `id-theme-${theme}`)}>{id}</div>
                  <div class={styles.name}>{itemic.name}</div>
                  <div>{itemic.description}</div>
                  <div>
                    <button className={cx("changeStatusButton",
                    `changeStatusButton-color-${itemic.completed}-${theme}`)} onClick={() => {
                      itemic.onChangeTask(itemic.id)
                    }}>{itemic.completed.toString()}</button>
                    
                  </div>
                  
              </div>
            )}
      </ThemeContext.Consumer>
      )
   }


   export const Item = connect(mapStateToProps)(ItemComponent) 
