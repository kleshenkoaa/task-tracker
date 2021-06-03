export const ADD_PROJECT = 'ADD_PROJECT'
export const CHANGE_PROJECT = 'CHANGE_PROJECT'

export const handleAddProject = projectList => ({ // action creator
  type: ADD_PROJECT,
  payload: projectList
})

export const handleChangeProject = projectList => ({ // action creator
  type: CHANGE_PROJECT,
  payload: projectList
})