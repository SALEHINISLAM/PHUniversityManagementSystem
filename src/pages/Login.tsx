import React from 'react'
import { useAppDispatch } from '../redux/hooks'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../redux/feature/auth/AuthApi'
import { setUser } from '../redux/feature/auth/AuthSlice'
import { verifyToken } from '../utlis/VarifyToken'

export default function Login() {

  type TUserCredentials = {
    id: string,
    password: string
  }

  const dispatch = useAppDispatch()
  const { } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [login, { error }] = useLoginMutation()

  const onSubmit = async (data:TUserCredentials) => {
    try {
      const result = await login({ data }).unwrap()
      const user = await verifyToken(result.data.accessToken)
      dispatch(setUser({user:user,token:result.data.accessToken}))

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>Login</div>
  )
}
