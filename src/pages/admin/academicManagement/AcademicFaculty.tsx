import React from 'react'
import { useGetAllAcademicFacultyQuery } from '../../../redux/feature/admin/academicManagement.Api'
import { TAcademicFaculty } from '../../../types'
import { Button, Skeleton, Table, TableColumnsType, TableProps } from 'antd'

export default function AcademicFaculty() {
  
  const { data: facultyData, isLoading, isFetching } = useGetAllAcademicFacultyQuery(undefined)
  console.log(facultyData)
  
  const tableData = facultyData?.data?.map(({ _id, name }) => ({ key: _id, name }))
  
  type TTableData = Pick<
    TAcademicFaculty,
    "name"
  >

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Academic Faculty Name',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    }
  ]
  const onChange: TableProps<TTableData>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {

  };
  if (isLoading) {
    return <Skeleton active={true} />
  }
  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
      />
    </>
  )
}
