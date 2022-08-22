import { RESET_FILTER, TOGGLE_AUTHOR, TOGGLE_TAG } from './actionTypes'

/**
 * @desc "Toggle By Author"
 * @param {String} authorName
 * @param {String} changeType
 * @return {type:String, payload:{
 * author:String, changeType:String}}
 */
export function toggleByAuthor(author, changeType) {
  return {
    type: TOGGLE_AUTHOR,
    payload: {
      author,
      changeType,
    },
  }
}

/**
 * @desc "Toggle By Tagname"
 * @param {String} tagName
 * @param {String} changeType
 * @return {type:String, payload:{
 * tag:String, changeType:String}}
 */
export function toggleByTag(tag, changeType) {
  return {
    type: TOGGLE_TAG,
    payload: {
      tag,
      changeType,
    },
  }
}

/**
 * @desc "Reset Filter"
 * @return {type:String}
 */
export function resetFilter() {
  return {
    type: RESET_FILTER,
  }
}
