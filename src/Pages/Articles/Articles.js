import React from 'react'
import './Articles.css'

const Articles = () => {
  return (
    <section className="articles container">
        <h2 className="section-title">Полезные статьи</h2>
        <div className="articles__item">
            <img src="../../../public/img/article-1.png" width="500" height="300" alt="#"/>
            <div className="item-left">
                <a href="" class="item__text">Правила укладки плитки</a>
                <p className="item__date">15.12.2022</p>
            </div>
        </div>
        <div className="articles__item">
            <img src="./article-2.png" width="500" height="300" alt="#"/>
            <div className="item-left">
                <a href="" class="item__text">Отличия плитки от керамогранита</a>
                <p className="item__date">06.12.2022</p>
            </div>
        </div>
        <div className="articles__item">
            <img src="./article-3.png" width="500" height="300" alt="#"/>
            <div className="item-left">
                <a href="" class="item__text">Как посчитать количество плитки</a>
                <p className="item__date">01.12.2022</p>
            </div>
        </div>
        <div className="articles__item">
            <img src="./article-4.png" width="500" height="300" alt="#"/>
            <div className="item-left">
                <a href="" class="item__text">Что еще нужно для ремонта</a>
                <p className="item__date">21.10.2022</p>
            </div>
        </div>

    </section> 
  )
}

export default Articles
