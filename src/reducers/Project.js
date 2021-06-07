import { ADD_PROJECT, CHANGE_PROJECT } from "../actions/Project";

import projects from '../Data/projects.js'
import normalizeState from '../Data/normalizeState.js'
//'./components/List/List.js'
const {projectsById, tasksById} = normalizeState(projects)


const initialState = {
    projects: projectsById,
    tasks: tasksById
}

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT: {
            return {
                ...state,
                projects: Object.assign({...state.projects}, action.payload)
            }
        }
        default:
            return state
    }
} 