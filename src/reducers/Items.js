import { CHANGE_ITEM, ADD_ITEM } from "../actions/Item";


const initialState = {
    projectsById: {},
    tasksById: {}
}

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ITEM: {
            return {
                ...state,
                tasksById: Object.assign({...state.tasksById}, action.payload)
            }
        }
        case ADD_ITEM: {
            return {
                ...state,
                tasksById: Object.assign({...state.tasksById}, action.payload.newTask)
            }
        }
        default:
            return state
    }
} 