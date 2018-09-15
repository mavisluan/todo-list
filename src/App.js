import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    items: [],
    text: '',
    activeTab: 'all'
  }

  componentDidMount() {
    const localItems = JSON.parse(localStorage.getItem('localItems'))
    const items = localItems ? localItems : []
    this.setState({ items })
  }
  addItem = (text) => {
    if (text) {
      const item = this.itemCreator(text)
      const items = [...this.state.items, item]
      localStorage.setItem('localItems', JSON.stringify(items))
      return this.setState({ items, text: '' })
    }  
  } 

  itemCreator = ( text ) => {
    const length = this.state.items.length
    const id = (length === 0) ? 0 : length
    let completed = false
    return ({ id, text, completed })
  }

  updateText = (e) => (
    this.setState({ text: e.target.value})
  )
  
  removeItems = (id) => {
    const items = this.state.items.filter( item => item.id !== id)
    localStorage.setItem('localItems', JSON.stringify(items))
    this.setState({ items})
  }
  markCompleted = (id) => {
    const items = this.state.items.map(item => {
      (item.id === id ) && (item.completed = !item.completed)
      return item
    })
    localStorage.setItem('localItems', JSON.stringify(items))
    this.setState({ items })
  }
  
  updateTag = (e) => {
    const activeTab = e.target.value
    this.setState({ activeTab })
  }

  render() {
    const { items, text, activeTab } = this.state
    let itemsOnBoard = []
    if (activeTab === 'all' ) {
      itemsOnBoard = items
    }  
    if (activeTab === 'completed') {
      itemsOnBoard = items.filter(item => (item.completed === true))
    } 
    if (activeTab === 'active') {
      itemsOnBoard = items.filter(item => (item.completed === false))
      
    }

    return (
      <div className="App">
        <div className='item-creator'>
          <input 
            type='text'
            value={text}
            onChange={this.updateText}
          />
          <button onClick={()=> this.addItem(text) }>Add Todo</button>
        </div>
        <div className='display'>  
          <ul>
            {itemsOnBoard.map( item => (
              <li key={item.id} className={activeTab}>
                <span onClick={() => this.markCompleted(item.id)}>   
                  {item.text}
                </span>
                <button className='remove' onClick={() => this.removeItems(item.id)}>
                  <i className="fas fa-times"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='display-control'>
              <span>Show:</span>
              <button 
                className={`${activeTab==='all'&& 'selected'}`} 
                value='all' 
                onClick={this.updateTag} >
                All
              </button>
              <button 
                className={`${activeTab==='active'&& 'selected'}`} 
                value='active' 
                onClick={this.updateTag}>
                Active
              </button>
              <button 
                className={`${activeTab==='completed'&& 'selected'}`} 
                value='completed' 
                onClick={this.updateTag}>
                Completed
              </button>
        </div>
      </div>
    );
  }
}

export default App;
