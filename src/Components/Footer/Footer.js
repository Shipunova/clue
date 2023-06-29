import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-content__item">
                <div className="footer__menu">
                    <span className="footer__address-info-line">г. Нижний Новгород <br/>ул. Базарная, 8</span>
                    <span className="footer__address-info-line">г. Нижний Новгород <br/>ул. Коминтерна, 127</span>
                </div>
            </div>
            <div className="footer-content__item">
            <ul className="footer__menu">
                    <li className="footer__menu_li"><span href="#">+7 (996) 566 29 43</span></li>
                    <li className="footer__menu_li"><span href="#">plitka.bazarnaya8@yandex.ru</span></li>
                </ul>
            </div>
            <div className="footer-content__item">
                <span className="footer__address-info-line">09:00-19:00</span>
                <span className="footer__address-info-line">Ежедневно</span>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer
