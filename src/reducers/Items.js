import { CHANGE_ITEM, ADD_ITEM, ADD_ITEM_IN_PROJECT } from "../actions/Item";
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
            let updatedTasksList = {...state.tasks}
            updatedTasksList[taskToChangeStatusID].completed = !action.completed
            return {
                ...state,
                tasks: updatedTasksList
            }
        }
        case ADD_ITEM: {
            const {taskId, taskName, taskDescription} = action
            const newTasksList = {...state.tasks}
            newTasksList[taskId] = {
              id: taskId,
              name: taskName,
              description: taskDescription,
              completed: false
            }
            console.log("action", action)
            return { 
              ...state, 
              tasks: newTasksList
            }
          }
         
        default:
            return state
    }
} 