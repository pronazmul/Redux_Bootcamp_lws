import { SEARCH } from './actionTypes'

/**
 * @desc "Search by Title"
 * @param {String} searchQuery
 * @return {type:String, payload:String}
 */
export function blogSearch(searchQuery) {
  return {
    type: SEARCH,
    payload: searchQuery,
  }
}
