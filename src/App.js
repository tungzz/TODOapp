import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.todoItem = [
        {title : 'Di mua xang', isComplete : true},
        {title : 'Dat cho di dao', isComplete :true},
        {title : 'Mua bim bim'}
      ];
    }
  
    render() {
      return(
        <div className="App">
          {this.todoItem.length > 0 && this.todoItem.map((item, index) => 
              <TodoItem key={index} item={item} />                           //if todo item is none, write 'Nothing here'.
            )} 
          {this.todoItem.length ===0 && 'Nothing here' }   
        </div>
      )
    }
  }
  
  export default App;