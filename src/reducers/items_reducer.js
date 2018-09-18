import { ADD_ITEM , MARK_COMPLETED, REMOVE_ITEM } from '../actions.js'

const items_reducer = (state = [], action ) => {
    const { type, text, id } = action
    switch(type) {
        case ADD_ITEM: 
            if (text) {
                const itemCreator = ( text ) => {
                    const length = state.length
                    const id = (length === 0) ? 0 : length
                    let completed = false
                    return ({ id, text, completed })
                 }
                return [...state, itemCreator(text)]
            } else {
                return state
            }  
        case MARK_COMPLETED:
            return state.map(item => {
                (item.id === id ) && (item.completed = !item.completed)
                return item
            })
        case REMOVE_ITEM: 
            return state.filter( item => item.id !== id) 
        default: 
            return state    
    }
}

export default items_reducer