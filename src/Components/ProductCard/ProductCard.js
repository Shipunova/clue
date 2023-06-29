import React from 'react'
import './ProductCard.css'
import {FaHeart} from 'react-icons/fa'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {useNavigate} from "react-router-dom"
import { PRODUCT_ROUTE } from '../../utils/consts'

const ProductCard = ({product}) => {
        const navigate = useNavigate()
    const handleClick = () => {
         navigate(PRODUCT_ROUTE + '/' + product.id);
     }
  return (
    <div className="card-product">
      <div className="productCard_imgContainer">
        <img className="productCard_img" src={'http://localhost:5005/' + product.img} alt="product_name"/>
      
      </div>
      <div className='productCard_like'><FaHeart className='icons_like'/></div>
      <div className="card-product__info">
          <span className="productCard_name">{product.name}</span>
          <span className="productCard_name">{product.brand}</span>
          <div class="card-product__price">
            <span className="card-price">{product.price} р/м2</span>
            <div onClick={handleClick}><BsFillArrowRightCircleFill className="productCard_bsArrow"/></div>
            </div>
        </div>

    </div>
   
  )
}

export default ProductCard
