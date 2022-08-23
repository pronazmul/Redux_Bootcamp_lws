const productQuantityChecker = (store) => (next) => (action) => {
  let {
    products,
    cart: { cartItems },
  } = store.getState()
  let productId = action.payload
  let productQuantity = products.find((v) => v.id === productId).countInStock
  let cartQuantity = cartItems.find((v) => v.id === productId).quantity

  switch (action.type) {
    case 'CART_INCREASE_QUANTITY':
      if (productQuantity > 0) {
        next(action)
      } else {
        next({ type: 'CART_ERROR', payload: 'Product Stock Out' })
      }
      break
    case 'CART_DECREASE_QUANTITY':
      if (cartQuantity > 0) {
        next(action)
      } else {
        next({ type: 'CART_ERROR', payload: "Quantity Can't be less than 0" })
      }
      break
    default:
      next(action)
  }
}

export default productQuantityChecker
