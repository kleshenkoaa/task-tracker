export const ADD_ITEM = 'ADD_ITEM'
export const CHANGE_ITEM = 'CHANGE_ITEM'
export const ADD_ITEM_IN_PROJECT = 'ADD_ITEM_IN_PROJECT'

export const handleAddItem = (taskId, taskName, taskDescription) => ({ // action creator
  type: ADD_ITEM,
  taskId: taskId,
  taskName: taskName,
  taskDescription: taskDescription
})

export const handleChangeItem = (id, completed) => ({ // action creator
  type: CHANGE_ITEM,
  id: id,
  completed: completed
})

export const handleAddItemInProject = (taskId, taskName, taskDescription, projectId) => ({ // action creator
  type: ADD_ITEM_IN_PROJECT,
  taskId: taskId,
  taskName: taskName,
  taskDescription: taskDescription, 
  projectId: projectId
})
