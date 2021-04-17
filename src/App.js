import './App.css';
import React from 'react';

const data = [
  {
    id: 1,
    name: 'Buy the groceries',
    description: 'Go to Perekrestok and buy some meat, milk, potatoes and cheese.',
    completed: 'false'
  },
  {
    id: 2,
    name: 'Mop the floors',
    description: 'Mop floors in all rooms',
    completed: 'true'
  },
  {
    id: 3,
    name: 'Clean the stove',
    description: 'Clean stove with cleansing gel',
    completed: 'true'
  },
  {
    id: 4,
    name: 'Inspect the fridge',
    description: 'Look up the shelves and throw out stale products',
    completed: 'false'
  },
  {
    id: 5,
    name: 'Vacuum the floors',
    description: 'Vacuum in all rooms',
    completed: 'false'
  },
  {
    id: 6,
    name: 'Read the book',
    description: 'Read 100 pages of the book',
    completed: 'true'
  }
]

const Item = ({id, tag, description, completed}) => (
  <div>
    <div class="id">{id}</div>
    <div>{tag}</div>
    <div>{description}</div>
    <div class="status">{completed}</div>
    <button class="changeStatusButton" key={id} onClick={() => {
      console.log('Task '+id+' completed status = '+completed)
    } }>Change status</button>
  </div>
)

const List = () => {
  return(
    <div>
      {data.map(it => 
      <Item id={it.id}
            tag={it.name} 
            description={it.description} 
            completed={it.completed} />
      )}
    </div>
  )
}

const App = () => {
  return(
    <div>
      <List/>
    </div>
  )
 }
  

export default App;

/*

class MyTodoList extends React.Component {
  buttonHandleClick = () => {
    console.log("Task 1"+List[0].id+
    ' completed status = '+ List[0].completed)
  }
  render()
    {
      return(
        <div>
         
         <button onClick={this.buttonHandleClick.bind(this)}></button>
       
         </div>
        /*
        <div>
           <List id={this.state.tasks.id}
            nam={this.state.tasks[0].name}
            desc={this.state.tasks[0].description}
            status={this.state.tasks[0].completed}
            />
            <button onClick={this.buttonHandleClick.bind(this)}
            
              class="changeStatusButton">
            </button>
             <List id={this.state.tasks[1].id}
            nam={this.state.tasks[1].name}
            desc={this.state.tasks[1].description}
            status={this.state.tasks[1].completed}
            />
            <button onClick={this.buttonHandleClick.bind(this)} class="changeStatusButton"></button>
        </div>
        
        

      )
      
    }
};



const Task = ({id, nam, desc, status}) => {
  return(
    <div>
      <div>{id}</div>
      <div>{nam}</div>
      <div>{desc}</div>
      <div>{status}</div>
    </div>
  )
}

 
 statusChanged = ({id, status}) => {
  return(
    console.log({id} +' completed status = '+ {status})
  )
 };

  {"Task "+{id} +' completed status = '+ {status}} 
 

  */

 
