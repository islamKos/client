import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

export const Navbar = () => {
  const activeStyle = {
    color: '#62B1D0',
  }

  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    toast('Вы вышли из аккаунта')
  }

  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-8 h-6 bg-gray-600 text-white rounded-sm ">
        KIA
      </span>
      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={'/'}
              href="/"
              className=" text-gray-500 hover:text-black"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/posts'}
              href="/"
              className=" text-gray-500 hover:text-black"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Мои посты
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/new'}
              href="/"
              className=" text-gray-500 hover:text-black"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Добавить пост
            </NavLink>
          </li>
        </ul>
      )}

      <div className="flex justify-center items-center bg-gray-600 text-white rounded-sm px-3 py-1">
        {isAuth ? (
          <button onClick={logoutHandler}>Выйти</button>
        ) : (
          <Link to={'/login'}>Войти</Link>
        )}
      </div>
    </div>
  )
}
