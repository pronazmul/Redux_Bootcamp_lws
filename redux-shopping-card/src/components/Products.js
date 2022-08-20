import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlusIcon from './elements/PlusIcon'
import { format } from 'format2money'
import { addToCart } from './redux/cart/actions'

const Products = () => {
  const { products } = useSelector((state) => state)

  const dispatch = useDispatch()
  const addCart = (id) => {
    dispatch(addToCart(id))
  }

  return (
    <div className='col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8'>
      {products.map((product) => (
        <div
          key={product.id}
          className='bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4'
        >
          <div className='flex justify-between px-4 items-center'>
            <div className='text-lg font-semibold'>
              <p>
                {product.title}({product.countInStock})
              </p>
              <p className='text-gray-400 text-base'>
                Tk {format(product.price, { decimal: 2 })}
              </p>
            </div>
            <div className='text-lg font-semibold'>
              <button
                onClick={() => addCart(product.id)}
                className='focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center'
              >
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
