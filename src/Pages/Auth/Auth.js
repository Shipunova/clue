import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate} from 'react-router-dom'
import { CATALOG_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import './Auth.css';
import { login, registration } from '../../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const Auth = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
         let data;
                if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
        }
        user.setIsUser(user)
        user.setIsAuth(true)
        navigate(CATALOG_ROUTE)
        } catch(e) {
            alert(e.response.data.message)
        }
    }
    
  return (
    <div>
        <div className='auth_card'>
            <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <input 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            className="auth_input" 
            placeholder='Введите email'/>
            <input 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            className="auth_input" 
            placeholder='Введите пароль'/>
            <div className='auth_bottom'>
                {isLogin ?
                <div>Нет аккаунта?<br/>
                    <NavLink to={REGISTRATION_ROUTE} activeClassName="authlink">Зарегистрироваться</NavLink>
                </div>
                :
                <div>Есть аккаунт?<br/>
                    <NavLink to={LOGIN_ROUTE} activeClassName="authlink">Войдите</NavLink>
                </div>
                }
                <button 
                onClick={click}
                className='auth_button'>{isLogin ? 'Войти' : 'Регистрация'}</button>
                </div>
            
        </div>
        </div>
  )
})

export default Auth
