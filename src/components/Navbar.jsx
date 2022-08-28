import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

export const Navbar = () => {
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()

  const activeStyles = {
    color: 'white',
  }

  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    toast('Вы вышли из системы')
  }

  return (
    <div className="flex py-4 justify-between items-center">
      <NavLink
        to={'/'}
        className="flex mx-4 px-2 w-auto justify-center items-center h-6 bg-gray-500 text-white rounded-sm"
      >
        KIA
      </NavLink>

      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={'/'}
              href="/"
              className=" text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/posts'}
              href="/"
              className=" text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Мои посты
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/new'}
              href="/"
              className=" text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Добавить пост
            </NavLink>
          </li>
        </ul>
      )}

      <div className="flex mx-4 justify-center items-center bg-gray-500 text-white rounded-sm px-4">
        {isAuth ? (
          <Link to={'/register'} onClick={logoutHandler}>
            Выйти
          </Link>
        ) : (
          <Link to={'/login'}> Войти </Link>
        )}
      </div>
    </div>
  )
}
