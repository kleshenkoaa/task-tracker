export const ADD_ITEM = 'ADD_ITEM'
export const CHANGE_ITEM = 'CHANGE_ITEM'

export const handleAddItem = ({taskId, taskName, taskDescription}) => ({ // action creator
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