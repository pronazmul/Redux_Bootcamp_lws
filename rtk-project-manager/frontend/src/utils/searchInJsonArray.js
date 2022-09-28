/**
 * @description - This function is used to search by regular expression inside json array
 * @param {String}  Search string
 * @param {array}  Array to be searched
 * @param {array}  Array values to be skipped while search (Optional)
 * @returns {array}  Filtered array
 */
const searchInJsonArray = (search, array, skipValues = []) => {
  let regex = new RegExp(search, 'i')
  return array.filter((i) =>
    Object.keys(i).some((j) =>
      skipValues.length && skipValues.includes(j) ? false : i[j].match(regex)
    )
  )
}

export default searchInJsonArray
