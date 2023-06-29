import React, { useContext } from 'react'
import {Route, Routes} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Catalog from '../Pages/Catalog/Catalog';
import { Context } from '..';

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
  return (
    <Routes>
      {user.isAuth === true && authRoutes.map(({path, Component}) =>
      <Route key={path} path={path} element={<Component/>} exact/>)}
      {publicRoutes.map(({path, Component}) =>
      <Route key={path} path={path} element={<Component/>} exact/>)}
      <Route path='*' element={<Catalog/>}/>
    </Routes>
  )
}

export default AppRouter
