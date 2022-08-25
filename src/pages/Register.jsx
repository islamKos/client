import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, checkIsAuth } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

export const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (status) {
      toast(status)
    }
    if (isAuth) navigate('/')
  }, [status, isAuth, navigate])

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }))
      setPassword('')
      setUsername('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-40"
    >
      <h1 className="text-gray-800 text-center text-lg">Регистрация</h1>
      <label className="text-gray-500 px-3">
        Имя пользователя:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className=" mt-1 w-full rounded-lg bg-gray-200 border py-1 px-2 outline-none placeholder: text-gray-600"
          placeholder="Введите имя пользователя"
        ></input>
      </label>
      <label className="text-gray-500 px-3">
        Пароль:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" mt-1 w-full rounded-lg bg-gray-200 border py-1 px-2 outline-none placeholder: text-gray-600"
          placeholder="Введите пароль"
        ></input>
      </label>
      <div className="flex gap-3 ">
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex justify-center items-center text-slate-500 py-1 my-3 px-3 mx-3 rounded-sm hover:text-black bg-slate-300"
        >
          Подтвердить
        </button>
        <Link
          to={'/login'}
          className="flex justify-center items-center text-slate-500 py-1 my-3 px-3 rounded-sm hover:text-black"
        >
          Есть аккаунт?
        </Link>
      </div>
    </form>
  )
}
