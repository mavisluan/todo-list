import React from 'react'
import { connect } from 'react-redux'
import { updateTab } from '../actions.js'

const DisplayControl = ({ activeTab, updateTab }) => (
    <div className='board-control'>
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
)

const mapStateToProps = ( { activeTab} ) => ({ activeTab })

const mapDispatchToProps = (dispatch) => ({
  updateTab: (activeTab) => dispatch(updateTab(activeTab))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayControl)