import { combineReducers } from 'redux'
import todos_reducer from './todos_reducer'
import activeTab_reducer  from './activeTab_reducer'

const rootReducer = combineReducers({
    items: todos_reducer,
    activeTab: activeTab_reducer
})

export default rootReducer