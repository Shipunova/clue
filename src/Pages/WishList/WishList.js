import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Context } from '../..'
import ProductCard from '../../Components/ProductCard/ProductCard'

const WishList = () => {
  const {product} = useContext(Context)
  const[wishList, setWishlist] = useState(product)
console.log(wishList)
  return (
    <div>
      <div>
        {wishList.products.map(product => 
            <ProductCard key={product.id} product={product} />)}

      </div>
      <Button>Push</Button>
    </div>
  )
}

export default WishList
