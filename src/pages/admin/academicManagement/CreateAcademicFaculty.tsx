import PHForm from '../../../components/form/PHForm'
import { Button, Col, Flex } from 'antd'
import PHInput from '../../../components/form/PHInput'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'
import { useAddAcademicFacultyMutation } from '../../../redux/feature/admin/academicManagement.Api'
import { TAcademicFaculty, TError, TResponse } from '../../../types'

export default function CreateAcademicFaculty() {

  const [addAcademicFaculty] = useAddAcademicFacultyMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const toastId = toast.loading("Creating academic faculty...");
    console.log(data)
    const facultyData = {
      name: data.name,
    }
    try {
      const res = await addAcademicFaculty(facultyData) as TResponse<TAcademicFaculty>
      console.log(res)
      if ((res.error as TError)?.status === 400) {
        toast.warning((res.error as TError).data?.errorSources?.[0]?.message || "This Faculty name is exist", { id: toastId })
      }
      else if ((res.error) as TError) {
        toast.error((res.error as TError).data.message, { id: toastId })
      } else {
        toast.success(res?.message as string, { id: toastId })
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong", { id: toastId })
    }
  }

  return (
    <Flex justify='center' align='center'>
      <Col span={6}>
        <PHForm onSubmit={onSubmit} >
          <PHInput type='text' name='name' label='Academic Faculty Name' />
          <Button htmlType='submit'>Add</Button>
        </PHForm>
      </Col>
    </Flex>
  )
}
