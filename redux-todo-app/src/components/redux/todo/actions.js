import {
  ADDED,
  ALL_COMPLITED,
  CLEAR_COMPLITED,
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
 * @param {string} todoColor
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
    action: DELETED,
    payload: id,
  }
}

/**
 * @desc "All Mark As Complited"
 * @return {type:String}
 */
export function allComplited() {
  return {
    type: ALL_COMPLITED,
  }
}

/**
 * @desc "Clear Complited Todos"
 * @return {type:String}
 */
export function clearComplited() {
  return {
    type: CLEAR_COMPLITED,
  }
}
