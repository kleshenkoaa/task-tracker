export const ADD_PROJECT = 'ADD_PROJECT'
export const CHANGE_PROJECT = 'CHANGE_PROJECT'
export const PROJECT_TASK_ADD = 'PROJECT_TASK_ADD'

export const handleAddProject = (projectId, projectName) => ({ // action creator
  type: ADD_PROJECT,
  projectId: projectId,
  projectName: projectName
})

export const handleChangeProject = projectList => ({ // action creator
  type: CHANGE_PROJECT,
  payload: projectList
})

export const handleProjectTaskAdd = (projectId, taskId, taskName, taskDescription) => ({
  type: PROJECT_TASK_ADD,
  projectId: projectId,
  taskId: taskId,
  taskName: taskName,
  taskDescription: taskDescription
})