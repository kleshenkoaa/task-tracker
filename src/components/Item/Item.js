import React from 'react';
import './Item.css';


class Item extends React.Component {
    state = {
        id: this.props.id,
        tag: this.props.name,
        description: this.props.description,
        status: this.props.completed
  } 
        render() {
          return (
            <div>
                <div class="id">{this.state.id}</div>
                <div>{this.state.tag}</div>
                <div>{this.state.description}</div>
                <div>
                    <button className="changeStatusButton" onClick={() => { 
                        if (this.state.status =='true') {
                          this.setState({status: 'false'})
                        }
                        else {
                          this.setState({status: 'true'})
                        }
                    }}>
                      <div class="status">{this.state.status}</div>
                    </button>
                </div>
            </div>
                  )
                  }
  }

  export default Item;