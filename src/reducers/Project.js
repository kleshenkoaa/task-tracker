import { ADD_PROJECT, CHANGE_PROJECT, PROJECT_TASK_ADD } from "../actions/Project";

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
        const {projectId, projectName} = action
            const newProjectsList = {...state.projects}
            newProjectsList[projectId] = {
              id: projectId,
              name: projectName,
              taskIds: []
            }
            console.log("action", action)
            return { 
              ...state, 
              projects: newProjectsList
            }
          }
        case PROJECT_TASK_ADD: {
          const {projectId, taskId, taskName, taskDescription} = action
          const newTasksList = {...state.tasks}
            const item ={
            id: taskId,
            name: taskName,
            description: taskDescription,
            completed: false, 
            projectId: projectId
          }
            console.log(item)
            newTasksList[taskId] = item
            const newProjectList = {...state.projects}
            newProjectList[item.projectId].tasksIds.push(item.id)
            console.log("action  1", action)
            console.log("action  1 newProjectList", newProjectList)
            console.log("action  1 newTasksList", newTasksList)
            return { 
              ...state, 
              tasks: newTasksList, 
              projects: newProjectList
          }
        }
        default:
            return state
    }
} 