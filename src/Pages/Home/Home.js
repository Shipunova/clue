import React from 'react'
import Banner from '../../Components/Banner/Banner'
import './Home.css'
import PopularCarousel from '../../Components/PopularCarousel/PopularCarousel'


const Home = () => {
  return (
    <div className='home_container'>
      <div className='page_title'><span>Интернет-каталог</span><span>плитки и керамогранита</span> </div>
        <div className='banner_slider'>
            <Banner/>
        </div>
        <div className='brand_line'> Картинки брендов</div>
        <div className='popular'>
          <div className='title_on_page'>Популярные товары</div>
          <div></div>
        </div>
        <div>Форма обратной связи</div>
<div>Слайдер статей</div>
    </div>
  )
}

export default Home
