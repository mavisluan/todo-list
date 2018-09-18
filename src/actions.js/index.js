export const ADD_ITEM = 'ADD_ITEM'
export const MARK_COMPLETED = 'MARK_COMPLETED'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const UPDATETAB = 'UPDATETAB'


export const addItem = (text) => ({
    type: ADD_ITEM,
    text
})

export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    id
})

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    id
})


export const updateTab = (activeTab) => ({
    type: UPDATETAB,
    activeTab
})


