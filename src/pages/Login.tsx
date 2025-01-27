import { useAppDispatch } from '../redux/hooks'
import { FieldValues, useForm } from 'react-hook-form'
import { useLoginMutation } from '../redux/feature/auth/AuthApi'
import { setUser, TUser } from '../redux/feature/auth/AuthSlice'
import { verifyToken } from '../utlis/VarifyToken'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'

export default function Login() {

  const navigate = useNavigate()
  type TUserCredentials = {
    id: string,
    password: string
  }

  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [login, { error }] = useLoginMutation()

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...")
    try {
      const result = await login({ data }).unwrap()
      const user = await verifyToken(result.data.accessToken) as TUser
      dispatch(setUser({ user: user, token: result.data.accessToken }))
      toast.success("Login successful", { id: toastId, duration: 3000 })
      navigate(`/${user?.role}`)
    } catch (error) {
      console.error(error)
      toast.error("Invalid credentials", { id: toastId, duration: 3000 })
    }
  }

  return (
    <div>Login</div>
  )
}
