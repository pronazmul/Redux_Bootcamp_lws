/**
 *
 * @param {[Array]} participents Array
 * @param {String} logged in user email
 * @returns {Object} - Partner Object
 */
export const findPartnar = (participents, email) => {
  return participents.find((p) => p.email !== email)
}
