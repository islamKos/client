import { Layout } from './components/Layout.jsx'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMe } from './redux/features/auth/authSlice.js'

import { Main } from './pages/Main'
import { Posts } from './pages/Posts'
import { Post } from './pages/Post'
import { AddPost } from './pages/AddPost'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { EditPost } from './pages/EditPost'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="posts" element={<Posts />} />
        <Route path=":id" element={<Post />} />
        <Route path=":id/edit" element={<EditPost />} />
        <Route path="new" element={<AddPost />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Layout>
  )
}

export default App
