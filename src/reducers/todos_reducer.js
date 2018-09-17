import { ADD_ITEM , MARK_COMPLETED, REMOVE_ITEM } from '../actions.js/todos'

const todos_reducer = (state = [], action ) => {
    const { type, text, id } = action
    let newState;
    switch(type) {
        case ADD_ITEM: 
            if (text) {
                const itemCreator = ( text ) => {
                    const length = state.length
                    const id = (length === 0) ? 0 : length
                    let completed = false
                    return ({ id, text, completed })
                 }
                const item = itemCreator(text)
                newState = [...state, item]
                localStorage.setItem('localItems', JSON.stringify(newState))
                return newState
            } else {
                return
            }  
        case MARK_COMPLETED:
            newState = state.map(item => {
                (item.id === id ) && (item.completed = !item.completed)
                return item
            })
            localStorage.setItem('localItems', JSON.stringify(newState))
            return newState
        case REMOVE_ITEM: 
            newState = state.filter( item => item.id !== id) 
            localStorage.setItem('localItems', JSON.stringify(newState))
            return newState
        default: 
            return state    
    }
}

export default todos_reducer