import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'format2money'
import MinusIconSmall from './elements/MinusIconSmall'
import PlusIconSmall from './elements/PlusIconSmall'
import { addToCart, removeFromCart } from './redux/cart/actions'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'

const Cart = () => {
  const { cartItems: cart, error } = useSelector((state) => state.cart)
  if (error) toast.error(error)

  let totalItem = cart.reduce((acc, value) => acc + value.quantity, 0)
  let totalPrice = cart.reduce(
    (acc, value) => acc + value.quantity * value.price,
    0
  )
  const dispatch = useDispatch()
  const addCart = (id) => {
    dispatch(addToCart(id))
  }

  const removeCart = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <div className='col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4'>
        <div className='bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4'>
          {cart.map((item) => (
            <div key={item.id} className='flex justify-between border-b-2 mb-2'>
              <div className='text-lg py-2'>
                <p>{item.title}</p>
              </div>
              <div className='text-lg py-2'>
                <div className='flex flex-row space-x-2 w-full items-center rounded-lg'>
                  <button
                    onClick={() => removeCart(item.id)}
                    className='focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center'
                  >
                    <MinusIconSmall />
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => addCart(item.id)}
                    className='focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center'
                  >
                    <PlusIconSmall />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className='flex justify-center items-center text-center'>
            <div className='text-xl font-semibold'>
              <p>Total Item</p>
              <p className='text-5xl'>{totalItem}</p>
            </div>
          </div>
        </div>
        <div className='bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4'>
          <div className='flex justify-center items-center text-center'>
            <div className='text-xl font-semibold'>
              <p>Total Price</p>
              <p className='text-5xl'>
                {format(totalPrice, { decimal: 2 }) || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
