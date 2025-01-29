import { Button, Col, Flex, Skeleton } from 'antd'
import PHForm from '../../../components/form/PHForm'
import PHInput from '../../../components/form/PHInput'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import PHSelect from '../../../components/form/PHSelect'
import { useAddAcademicDepartmentMutation, useGetAllAcademicFacultyQuery } from '../../../redux/feature/admin/academicManagement.Api'
import { toast } from 'sonner'
import { TError } from '../../../types'

export default function CreateAcademicDepartment() {

  const { data: facultyData, isLoading, isFetching } = useGetAllAcademicFacultyQuery(undefined)

  const facultyOptions=facultyData?.data?.map(item=>({label:item.name,value:item._id})) || []
  //console.log(facultyOptions)

  const [addAcademicDepartment]=useAddAcademicDepartmentMutation()
  
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId=toast.loading("Creating Academic Department...")
    //console.log(data)
    const departmentData={
      name: data.name,
      academicFaculty:data.academicFaculty
    }
    console.log("from department",departmentData)
    try {
      const res=await addAcademicDepartment(departmentData)
      console.log(res)
      if (res.error) {  
        toast.error((res.error as TError).data?.message,{id:toastId})
      }else {
        toast.success(res?.data?.message as string,{id:toastId})
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong.",{id: toastId})
    }
  }

  if (isLoading || isFetching) {
  return <Skeleton active/>  
  }

  return (
    <Flex align='center' justify='center'>
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHInput label='Department Name' name='name' type='text' />
          <PHSelect options={facultyOptions} name='academicFaculty' label='Academic Faculty'/>
          <Button htmlType='submit'>Add</Button>
        </PHForm>
      </Col>
    </Flex>
  )
}
