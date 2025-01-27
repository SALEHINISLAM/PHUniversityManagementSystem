import { ReactNode } from "react";

export type TUserPath={
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

