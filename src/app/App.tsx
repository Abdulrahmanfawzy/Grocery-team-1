import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const { pathname } = useLocation()
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  //   localStorage.setItem('auth_token', '31|S100ithGrJ5wzLnwNYk5tj09oB7GinoDLy6nWFqGab5f664e')
  // }, [pathname])
  return (
    <>
      <Outlet />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}
