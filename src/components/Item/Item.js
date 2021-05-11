import React from 'react';
import './Item.css';


const Item = (props) => {
   
          return (
            <div>
                <div class="id">{props.id}</div>
                <div>{props.name}</div>
                <div>{props.description}</div>
                <div>
                  <button class="changeStatusButton" onClick={() => {
                    props.onChangeTask(props.id)
                  }}>{props.completed.toString()}</button>
                  
                </div>
            </div>
                  )
      }

  export default Item;