import React from 'react'
import { Context } from '../..'
import {FaBars, FaHeart,FaMapMarkerAlt,FaUserCircle,FaChalkboard, FaUserTimes} from 'react-icons/fa'
import { useContext } from 'react'
import './Header.css';
import LOGO from './logo.png'
import { useNavigate, NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, ARTICLES_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, WISHLIST_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
    const adminClick = () => {
         navigate(ADMIN_ROUTE);
     }
    const loginClick = () => {
      navigate(LOGIN_ROUTE);
  }

  const logOut = () => {
    user.setIsUser({})
    user.setIsAuth(false)
  }
  return (
    <div>
     <div className="header">
    <div className="dropdown">
        <button className="dropbtn"><FaBars className='icons menu_icon'/></button>
        <div className="dropdown-content">
          <NavLink to={CATALOG_ROUTE}>Каталог</NavLink>
          <NavLink to={CATALOG_ROUTE}>Условия доставки</NavLink>
          <NavLink to={ARTICLES_ROUTE}>Полезные статьи</NavLink>
          <NavLink to={CONTACTS_ROUTE}>Контакты</NavLink>
        </div>
      </div>
      <div className="header-center">
                <NavLink to={CATALOG_ROUTE} style={{ textDecoration: 'none' }}><div className="logo_navlink">
                    <img className="logo__images" src={LOGO} alt="logo"/>
                    <span href="#" className="logo__text">Плитка<br/> в НН</span>
                </div></NavLink>
            </div>
            {user.isAuth 
            ? 
            <div className="header-right">
                <span className='phone_number'>+7 (996) 566 29 43</span>
                <div className="icon icon__location">
                <NavLink to={CONTACTS_ROUTE}><FaMapMarkerAlt className='icons'/></NavLink>
                <NavLink to={WISHLIST_ROUTE}><FaHeart className='icons'/></NavLink>
                <FaUserTimes className='icons' onClick={() => logOut()}/>
                <FaChalkboard className='icons' onClick={adminClick}/>
                </div>
                
            </div> 
            : 
            <div className="header-right">
                <span className='phone_number'>+7 (996) 566 29 43</span>
                <NavLink to={CONTACTS_ROUTE}><FaMapMarkerAlt className='icons'/></NavLink>
                
                
                <NavLink to={WISHLIST_ROUTE}><FaHeart className='icons'/></NavLink>
               
                <a  onClick={() => user.setIsAuth(true)} href="#">
                <FaUserCircle className='icons' onClick={() => navigate(LOGIN_ROUTE)}/>
                </a>
            </div> 
            }
    </div>
    </div>
  )
})

export default Header
