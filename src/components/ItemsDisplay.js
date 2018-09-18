import React from 'react'
import { connect } from 'react-redux'
import { markCompleted, removeItem } from '../actions.js'

const ItemsDisplay = ({ items, activeTab, markCompleted, removeItem }) => {
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
        <div className='items-board'>  
            <ul>
                {itemsOnBoard.map( item => (
                    <li key={item.id} className={item.completed ? 'completed': null}>
                        <span onClick={() => markCompleted(item.id)}>
                            {item.text}
                        </span>
                        <button className='remove' onClick={() => removeItem(item.id)}>
                            <i className="fas fa-times"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}  

const mapStateToProps = ( {items, activeTab} ) => ({ items, activeTab })

const mapDispatchToProps = (dispatch) => ({
    markCompleted: (id) => dispatch(markCompleted(id)),
    removeItem: (id) => dispatch(removeItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsDisplay)