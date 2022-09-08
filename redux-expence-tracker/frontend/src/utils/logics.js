/**
 *
 * @param {number} x
 * @returns {number} Like-  10,000
 */
export const thousandSaperator = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
