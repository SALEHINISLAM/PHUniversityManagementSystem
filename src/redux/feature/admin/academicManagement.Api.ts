import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester, TQueryParam, TResponseRedux } from '../../../types';
import { baseApi } from '../../api/BaseApi';

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/academic-semesters',
          method: 'GET',
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: '/academic-semesters/create-academic-semester',
        method: 'POST',
        body: data,
      }),
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method:"POST",
        body:data
      })
    }),
    getAllAcademicFaculty:builder.query({
      query:()=>({
      url:"/academic-faculties",
    method:"GET",
    }),
    transformResponse:(response:TResponseRedux<TAcademicFaculty[]>)=>{
      return {
        data:response?.data,
        meta:response?.meta
      }
    }
    }),
    addAcademicDepartment:builder.mutation({
      query:(data)=>({
        url:"/academic-departments/create-academic-department",
        method:"POST",
        body:data
      })
    }),
    getAllAcademicDepartment:builder.query({
      query: (args) => {
        console.log("from args",args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/academic-departments',
          method: 'GET',
          params: params,
        };
      },
      transformResponse:(response:TResponseRedux<TAcademicDepartment<TAcademicFaculty>[]>)=>{
        return {
          data:response?.data,
          meta:response?.meta
        }
      }
    })
  }),
});

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation,useAddAcademicFacultyMutation,useGetAllAcademicFacultyQuery,useAddAcademicDepartmentMutation,useGetAllAcademicDepartmentQuery } =
  academicManagementApi;