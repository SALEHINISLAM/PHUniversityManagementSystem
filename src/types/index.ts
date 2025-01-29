import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { ReactNode } from "react";

export type TUserPath = {
    name?: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
    index?: boolean;
}

export type TRoute = {
    path?: string;
    element: ReactNode;
    index?: boolean;
};


export type TSidebarItem = {
    key: string;
    label: ReactNode;
    children?: TSidebarItem[];
};

export type TErrSources={
    path:string;
    message: string;
}

export type TError = {
    data: {
        err?:object;
        errorSources?:TErrSources[];
        message: string;
        stack?: string;
        success: boolean;
    },
    status: number
}

export type TResponse<T> = {
    data?: T;
    error?: TError;
    meta?: TMeta;
    success: boolean;
    message?: string;
}

export type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
};

export type TAcademicSemester = {
    _id: string;
    name: string;
    year: string;
    code: string;
    startMonth: string;
    endMonth: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export type TQueryParam = {
    name: string;
    value: boolean | React.Key;
};

export type TResponseRedux<T>=TResponse<T> & BaseQueryApi

export type TAcademicFaculty={
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type TAcademicDepartment<T>={
    _id: string;
    name: string;
    academicFaculty: T;
    createdAt: string;
    updatedAt: string;
    __v: number;
}