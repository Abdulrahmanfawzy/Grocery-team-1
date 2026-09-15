import { useEffect } from 'react'

import { useAuthUser } from '../hooks/useAuthUser'
import { useAppDispatch } from '@/app/hook'
import { logout, setUser } from '../store/authSlice'


export default function AuthInitializer() {
  const dispatch = useAppDispatch()

  const { data, isSuccess, isError } = useAuthUser()

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data))
    }

    if (isError) {
      dispatch(logout())
    }
  }, [isSuccess, isError, data, dispatch])

  return null
}