import React, { useContext } from 'react'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'
import { CartProvider } from 'react-use-cart'

const ProductList = observer(() => {
      const {product} = useContext(Context)
  return (
    <CartProvider>
    <div>
      <div className='productList'>
        {product.products.map(product => 
            <ProductCard 
            key={product.id} 
            product={product}/>)}

      </div>
    </div>
      
    </CartProvider>
  )
})

export default ProductList
