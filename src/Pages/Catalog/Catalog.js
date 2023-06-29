import React, { useContext, useEffect } from 'react'
import './Catalog.css';
import TypeBar from '../../Components/TypeBar/TypeBar';
import BrandBar from '../../Components/BrandBar/BrandBar';
import ProductList from '../../Components/ProductList/ProductList.js';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { fetchBrands, fetchProducts, fetchTypes } from '../../http/productApi';
import Pages from '../../Components/Pages/Pages';

const Catalog = observer(() => {
  const { product } = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data))
    fetchBrands().then(data => product.setBrands(data))
    fetchProducts(null, null, 1, 12).then(data => {
      product.setProducts(data.rows)
      product.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchProducts(product.selectedType.id, product.selectedBrand.id, product.page, 12).then(data => {
        product.setProducts(data.rows)
        product.setTotalCount(data.count)
    })
}, [product.page, product.selectedType, product.selectedBrand,])

  return (
    <div className="container-center">
           <h2 className='section-title'>Каталог</h2>
           <div className='catalog'>
            <div><TypeBar/></div>
            <div>
              <div className='brands'><BrandBar/></div>
              <div className='cards'><ProductList/>
              <div><Pages/></div>
              </div>
            </div>
           </div>
        </div>
        
  )
})

export default Catalog
