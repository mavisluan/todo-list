import React from 'react'
import { addItem } from './actions.js/index'
import { connect } from 'react-redux'

const ItemCreator = ({ addItem }) => (
    <div className='item-creator'>
        <input 
            type='text'
            ref={(input) => this.input = input}/>
        <button 
            onClick={()=> { 
                addItem(this.input.value) 
                this.input.value =''}}>
            Add Todo
        </button>
    </div>
)

const mapStateToProps = ( {items} ) => ({ items })

const mapDispatchToProps = (dispatch) => ({
    addItem: (text) => dispatch(addItem(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreator)