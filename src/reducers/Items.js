import { CHANGE_ITEM, ADD_ITEM } from "../actions/Item";
import normalizeState from '..//Data/normalizeState'
import projects from '../Data/projects.js'

const {projectsById, tasksById} = normalizeState(projects)

const initialState = {
    tasks: tasksById,
    projects: projectsById
}

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ITEM: {
            let taskToChangeStatusID = action.id
            let updatedTasksList = {...initialState.tasks}
            updatedTasksList[taskToChangeStatusID].completed = !action.completed
            return {
                ...state,
                tasks: updatedTasksList
            }
        }
        case ADD_ITEM: {
            const {id, name, description} = action
            const newTasksList = {...initialState.tasks}
            newTasksList[id] = {
              id: id,
              name: name,
              description: description,
              completed: false
            }
            return { 
              ...state, 
              tasks: newTasksList
            }
          }
        default:
            return state
    }
} 