import { combineReducers } from 'redux'
import items_reducer from './items_reducer'
import activeTab_reducer  from './activeTab_reducer'

const rootReducer = combineReducers({
    items: items_reducer,
    activeTab: activeTab_reducer
})

export default rootReducer