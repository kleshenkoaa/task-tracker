export const ADD_ITEM = 'ADD_ITEM'
export const CHANGE_ITEM = 'CHANGE_ITEM'

export const handleAddItem = list => ({ // action creator
  type: ADD_ITEM,
  payload: list
})

export const handleChangeItem = list => ({ // action creator
  type: CHANGE_ITEM,
  payload: list
})