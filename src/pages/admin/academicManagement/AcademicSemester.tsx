import { Button, Skeleton, Table, TableColumnsType, TableProps } from 'antd';
import { useState } from 'react';
import { TAcademicSemester, TQueryParam } from '../../../types';
import { useGetAllSemestersQuery } from '../../../redux/feature/admin/academicManagement.Api';

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllSemestersQuery(params);

  console.log({ isLoading, isFetching });

  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  type TTableData = Pick<
    TAcademicSemester,
    'name' | 'year' | 'startMonth' | 'endMonth'
  >;
  
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
      ],
    },
    {
      title: 'Year',
      key: 'year',
      dataIndex: 'year',
      filters: [
        {
          text: '2025',
          value: '2025',
        },
        {
          text: '2026',
          value: '2026',
        },
        {
          text: '2027',
          value: '2027',
        },
      ],
    },
    {
      title: 'Start Month',
      key: 'startMonth',
      dataIndex: 'startMonth',
    },
    {
      title: 'End Month',
      key: 'endMonth',
      dataIndex: 'endMonth',
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
  ];

  const onChange: TableProps<TTableData>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === 'filter') {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: 'name', value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: 'year', value: item })
      );

      setParams(queryParams);
    }
  };

  if (isLoading) {
    return <Skeleton active={true} />
  }
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default AcademicSemester;