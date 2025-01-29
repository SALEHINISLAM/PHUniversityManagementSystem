import { useAppDispatch } from '../redux/hooks'
import { FieldValues } from 'react-hook-form'
import { useLoginMutation } from '../redux/feature/auth/AuthApi'
import { setUser, TUser } from '../redux/feature/auth/AuthSlice'
import { verifyToken } from '../utlis/VarifyToken'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { Button, Row } from 'antd'
import PHForm from '../components/form/PHForm'  
import PHInput from '../components/form/PHInput'

export default function Login() {

  const navigate = useNavigate()

const defaultValues={
  id: "A-0001",
  password: "admin123",
}

  const dispatch = useAppDispatch()

  const [login, { error }] = useLoginMutation()

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...")
    try {
      const result = await login({ id:data.id,password:data.password }).unwrap()
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
    <Row align={"middle"} justify={"center"} style={{height:"100vh"}}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type={"text"} name={"id"} label={"ID"}/>
        <PHInput type={"password"} name={"password"} label={"Password"}/>
        <Button htmlType='submit'>Login</Button>
      </PHForm>
    </Row>
  )
}
