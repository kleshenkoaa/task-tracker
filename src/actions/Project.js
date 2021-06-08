export const ADD_PROJECT = 'ADD_PROJECT'
export const CHANGE_PROJECT = 'CHANGE_PROJECT'

export const handleAddProject = (projectId, projectName) => ({ // action creator
  type: ADD_PROJECT,
  projectId: projectId,
  projectName: projectName
})

export const handleChangeProject = projectList => ({ // action creator
  type: CHANGE_PROJECT,
  payload: projectList
})