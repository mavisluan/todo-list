import { UPDATETAB } from '../actions.js/activeTab'

const activeTab_reducer = (state = 'all', action ) => {
    const {  type, activeTab } = action
    switch (type ) {
        case UPDATETAB: 
        return state = activeTab
        default: 
        return state
    }   
}

export default activeTab_reducer