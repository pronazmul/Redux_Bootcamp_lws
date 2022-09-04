import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  LOADED,
  TOGGLED,
  UPDATETODO,
} from './actionTypes'

export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  }
}

export const added = (todo) => {
  return {
    type: ADDED,
    payload: todo,
  }
}

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  }
}

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  }
}
export const update = (todoId, text) => {
  return {
    type: UPDATETODO,
    payload: {
      todoId,
      text,
    },
  }
}

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  }
}

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  }
}

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  }
}
