import { Button, Col, Flex } from 'antd'
import PHForm from '../../../components/form/PHForm'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import PHSelect from '../../../components/form/PHSelect'
import { nameOptions } from '../../../constants/semester'
import { monthOptions } from '../../../constants/globalConstants'
import { zodResolver } from '@hookform/resolvers/zod';
import { academicSemesterSchema } from '../../../schemas/academicSemesterSchema'
import { useAddAcademicSemesterMutation } from '../../../redux/feature/admin/academicManagement.Api'
import { toast } from 'sonner'
import { TResponse } from '../../../types'

const currentYear = new Date().getFullYear()
const yearOptions = [0, 1, 2, 3, 4, 5].map(number => 
  ({ 
    value: String(number + currentYear), 
    label: String(number + currentYear) 
  })
  )
export default function CreateAcademicSemester() {
  
  const [addAcademicSemester]=useAddAcademicSemesterMutation()
  
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId=toast.loading("Creating...")
    const semesterData = {
      name: nameOptions[Number(data.name)-1].label,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth
    }
    console.log(semesterData)
    try {
      const res=await addAcademicSemester(semesterData) as TResponse
      console.log(res)
      if (res.error) {  
        toast.error(res.error?.data?.message,{id:toastId})
      }else {
        toast.success("Academic Semester created successfully!",{id:toastId})
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong",{id:toastId})
    }
  }

  return (
    <Flex justify='center' align='center'>
      <Col span={6}>
        <PHForm resolver={zodResolver(academicSemesterSchema)} onSubmit={onSubmit} >
          <PHSelect options={nameOptions} name='name' label='Academic Semester Name' />
          <PHSelect options={yearOptions} name='year' label='Year' />
          <PHSelect options={monthOptions} name='startMonth' label='Start Month' />
          <PHSelect options={monthOptions} name='endMonth' label='End Month' />
          <Button htmlType='submit'>Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  )
}
