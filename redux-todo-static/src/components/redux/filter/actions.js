import { COLOR_CHANGED, STATUS_CHANGED } from './actionTypes'

/**
 * @desc "Filter By Color"
 * @param {String} colorName
 * @param {String} changeType
 * @return {type:String, payload:{
 * color:String, changeType:String}}
 */
export function colorChanged(color, changeType) {
  return {
    type: COLOR_CHANGED,
    payload: {
      color,
      changeType,
    },
  }
}

/**
 * @desc "Filter by Status"
 * @param {String} Status
 * @return {type:String, payload:String}
 */
export function statusChange(status) {
  return {
    type: STATUS_CHANGED,
    payload: status,
  }
}
