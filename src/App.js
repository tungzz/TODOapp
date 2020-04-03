import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.todoItem = [
        {title : 'Di mua xang'},
        {title : 'Dat cho di dao'},
        {title : 'Mua bim bim'}
      ];
    }
  
    render() {
      return(
        <div className="App">
          {
            this.todoItem.map((item, index) => 
              <TodoItem key={index} title={item.title} />
            )
          }
        </div>
      )
    }
  }
  
  export default App;