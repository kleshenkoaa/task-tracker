import React from 'react';
import './AddTask.css';

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
          <div>
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
  }

  export default AddTask;