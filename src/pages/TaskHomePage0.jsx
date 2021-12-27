import React from 'react';
import SectionAddTask from '../components/Task/SectionAddTask';
import { Tasksource } from '../datas/Tasksource';
import { v4 as uuidv4 } from 'uuid';
import TaskList from '../components/Task/TaskList';
import { useState, useCallback } from 'react';


class TaskHomePage extends React.Component {
    
    constructor(props){
      super(props);
      this.state = {
        items:Tasksource,
        currentItem:{
          id:'',
          title:''
        }
      }
     // this.handleChange = this.handleChange.bind(this);
      //this.addItem = this.addItem.bind(this);
      
    }
  
    
    handleChange(e){
      //setValue(e.target.value);
      this.setState({
        currentItem:{
          title: e.target.value,
          id: Date.now()
        }
      })
    }
  
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      console.log(newItem);
      if(newItem.title!==""){
        const newItems = [...this.state.items, newItem];
        this.setState({
          items:newItems,
          currentItem:{
            title: '',
            id: ''
          }
        }
          
        )
      }
    }

    render() {

    return (
             <>
                {/* <SectionAddTask value = {value} handleAdd = {handleAdd} handleChange = {handleChange} /> */}
                <SectionAddTask
                    onSubmit={this.addItem}
                    value={this.state.currentItem.title}
                    onChange={this.handleChange}
                />
                <TaskList tasks={this.state.items}/>
            </>
                
        
    )

    }

}

    export default TaskHomePage


