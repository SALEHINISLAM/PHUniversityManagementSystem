import { NavLink } from "react-router";
import { TSidebarItem, TUserPath } from "../types";

export const sidebarGenerator=(items:TUserPath[],role:string)=>{
    const sidebarItems = items.reduce(
        (acc: TSidebarItem[], item:TUserPath) => {
            if (item.path && item.name) {
                acc.push({
                    key: item.name,
                    label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
                });
            }
    
            if (item.children) {
                acc.push({
                    key: item.name|| "Unnamed Group",
                    label: item.name,
                    children: item.children.map((child) => ({
                        key: child.name|| "Unnamed Group",
                        label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
                    })),
                });
            }
    
            return acc;
        },
        []
    );
    return sidebarItems
}