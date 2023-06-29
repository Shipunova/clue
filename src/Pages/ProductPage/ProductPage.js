import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import {FaHeart} from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { fetchOneProduct } from '../../http/productApi'

const ProductPage = () => {
  const [product, setProduct] = useState({info: []})
  
  // const description = [
  //   {id: 1, title: 'Степень истирания', description: '3'},
  //   {id: 1, title: 'Количество шт. в упаковке', description: '4'},
  //   {id: 1, title: 'Вес коробки', description: '36.4 кг'}
  // ]
  const {id} = useParams()
  console.log(id)
  useEffect(() => {
    fetchOneProduct(id).then(data => setProduct(data))
  }, [])

  return (
    <div className='productPage_Container'>
      <div className='productPage_header'>
        <div className='productPage_img'><img className='productCard_image' src={'http://localhost:5005/' + product.img} alt="product_img" /></div>
        <div className='productPage_mainInfo'>
        <div className='productPage_name'>{product.name}</div>
          <div className='productPage_price'>{product.price} р/м2</div>          
      <div className='productPage_like'><FaHeart className='pp_icons_like'/></div>
          </div>
      </div>
      <div className='productPage_info'>
        {/* <div className='ppInfo_row'>
          <div className='ppInfo_rowHeader'>BRAND</div>
          <div>Brand_name</div>
        </div>
        <div className='ppInfo_row'>
          <div className='ppInfo_rowHeader'>Type</div>
          <div>Type_info</div>
        </div>
        <div className='ppInfo_row'>
          <div className='ppInfo_rowHeader'>Size</div>
          <div>Size_info</div> */}
          {/* {product.info.map(info =>
            <div key={info.id}>{info.title}: {info.description} </div>)} */}
        </div>
      </div>
    
  )
}

export default ProductPage
