import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addItem, markCompleted, removeItem } from './actions.js/todos'
import { updateTab} from './actions.js/activeTab'

class App extends Component {
  state = {
    items: [],
    activeTab: 'all'
  }

  // componentDidMount() {
  //   const localItems = JSON.parse(localStorage.getItem('localItems'))
  //   const items = localItems ? localItems : []
  //   this.setState({ items })
  // }

  // addItem = (text) => {
  //   if (text) {
  //     const item = this.itemCreator(text)
  //     const items = [...this.state.items, item]
  //     localStorage.setItem('localItems', JSON.stringify(items))
  //     this.input.value = ''
  //     return this.setState({ items, text: '' })
  //   }  
  // } 

  // itemCreator = ( text ) => {
  //   const length = this.state.items.length
  //   const id = (length === 0) ? 0 : length
  //   let completed = false
  //   return ({ id, text, completed })
  // }

  // removeItem = (id) => {
  //   const items = this.state.items.filter( item => item.id !== id)
  //   localStorage.setItem('localItems', JSON.stringify(items))
  //   this.setState({ items})
  // }

  // markCompleted = (id) => {
  //   const items = this.state.items.map(item => {
  //     (item.id === id ) && (item.completed = !item.completed)
  //     return item
  //   })
  //   localStorage.setItem('localItems', JSON.stringify(items))
  //   this.setState({ items })
  // }
  
  // updateTab = (e) => {
  //   const activeTab = e.target.value
  //   this.setState({ activeTab })
  // }

  render() {
    console.log('props', this.props)
    const { items, activeTab, updateTab } = this.props
    
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
            ref={(input) => this.input = input}
          />
          <button 
            onClick={()=> {
              this.props.addItem(this.input.value) 
              this.input.value =''
            }}>
            Add Todo
          </button>
        </div>
        <div className='display'>  
          <ul>
            {itemsOnBoard.map( item => (
              <li key={item.id} className={item.completed ? 'completed': null}>
                <span onClick={() => this.props.markCompleted(item.id)}>
                 {item.text}
                </span>
                <button className='remove' onClick={() => this.props.removeItem(item.id)}>
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
                onClick={(e) =>updateTab(e.target.value)} >
                All
              </button>
              <button 
                className={`${activeTab==='active'&& 'selected'}`} 
                value='active' 
                onClick={(e) =>updateTab(e.target.value)} >                
                Active
              </button>
              <button 
                className={`${activeTab==='completed'&& 'selected'}`} 
                value='completed' 
                onClick={(e) =>updateTab(e.target.value)} >
                Completed
              </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( {items, activeTab} ) => ({ items, activeTab })

const mapDispatchToProps = (dispatch) => ({
  addItem: (text) => dispatch(addItem(text)),
  markCompleted: (id) => dispatch(markCompleted(id)),
  removeItem: (id) => dispatch(removeItem(id)),
  updateTab: (activeTab) => dispatch(updateTab(activeTab))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
