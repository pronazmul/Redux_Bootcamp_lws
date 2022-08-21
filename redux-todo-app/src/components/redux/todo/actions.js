import {
  ADDED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETED,
  TOGGLED,
} from './actiontypes'

/**
 * @desc "Add Todo Action"
 * @param {string} todoText
 * @return {type:String, payload:String}
 */
export function added(todoText) {
  return {
    type: ADDED,
    payload: todoText,
  }
}

/**
 * @desc "Toggle Complete/Incomplete"
 * @param {Number} toDoId
 * @return {type:String, payload:id}
 */
export function toggled(todoId) {
  return {
    type: TOGGLED,
    payload: todoId,
  }
}

/**
 * @desc "Select ToDo Color"
 * @param {Number} todoId
 * @param {String} todoColor
 * @return {type:String, payload:{id, color}}
 */
export function colorSelected(id, color) {
  return {
    type: COLOR_SELECTED,
    payload: {
      id,
      color,
    },
  }
}

/**
 * @desc "Delete ToDo by Id"
 * @param {Number} toDoId
 * @return {type:String, payload:Number}
 */
export function deleted(id) {
  return {
    type: DELETED,
    payload: id,
  }
}

/**
 * @desc "All Mark As COMPLETED"
 * @return {type:String}
 */
export function allCompleted() {
  return {
    type: ALL_COMPLETED,
  }
}

/**
 * @desc "Clear COMPLETED Todos"
 * @return {type:String}
 */
export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED,
  }
}
