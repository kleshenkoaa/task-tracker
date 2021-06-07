import React from 'react';
import styles from './Item.module.scss'
import classnames from 'classnames/bind'
import {ThemeContext} from "..//..//ThemeContext"

import { connect } from "react-redux";

const cx=classnames.bind(styles)
const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const ItemComponent = (props) => {
      return(<ThemeContext.Consumer> 
        {theme => (
              <div className={cx("box",`box-theme-${theme}`)}>
                  <div class={cx("id", `id-theme-${theme}`)}>{props.id}</div>
                  <div class={styles.name}>{props.name}</div>
                  <div>{props.description}</div>
                  <div>
                    <button className={cx("changeStatusButton",
                    `changeStatusButton-color-${props.completed}-${theme}`)} onClick={() => {
                      props.onChangeTask(props.id)
                    }}>{props.completed.toString()}</button>
                    
                  </div>
              </div>
            )}
      </ThemeContext.Consumer>
      )
   }
   //export default Item;

   export const Item = connect(mapStateToProps)(ItemComponent) 
