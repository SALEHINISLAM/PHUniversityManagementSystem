import { Button, Skeleton, Table, TableColumnsType, TableProps } from "antd"
import { useGetAllAcademicDepartmentQuery, useGetAllAcademicFacultyQuery } from "../../../redux/feature/admin/academicManagement.Api"
import { TAcademicDepartment, TAcademicFaculty, TQueryParam } from "../../../types"
import { useState } from "react";

export default function AcademicDepartment() {
  
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  
  const { data: departmentData, isFetching: deptFetching, isLoading: deptLoading } = useGetAllAcademicDepartmentQuery(params)
  const { data: facultyData, isFetching: facFetching, isLoading: facLoading } = useGetAllAcademicFacultyQuery(undefined)
  
  console.log(departmentData)
  const tableData = departmentData?.data?.map(({ _id, name, academicFaculty }) => ({ key: _id, name, academicFaculty })) || []

  type TTableData = Pick<
    TAcademicDepartment<TAcademicFaculty>,
    'name' | 'academicFaculty'>

  const columns: TableColumnsType<TTableData> = [{
    title: 'Academic Department',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Academic Faculty',
    key: 'academicFaculty',
    dataIndex: ['academicFaculty', 'name'],
    filters: facultyData?.data?.map(item => ({ text: item.name, value: item._id })) || []
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
  },
  ]
  const onChange: TableProps<TTableData>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === 'filter') {
      const queryParams: TQueryParam[] = [];

      filters.academicFaculty?.forEach((item) =>
        queryParams.push({ name: 'academicFaculty', value: item })
      );
      console.log(queryParams)

      setParams(queryParams);
    }
  };

  if (deptLoading || deptFetching || facLoading || facFetching) {
    return <Skeleton active={true} />
  }
  return (
    <>
      <Table
        loading={deptFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
      />
    </>
  )
}
