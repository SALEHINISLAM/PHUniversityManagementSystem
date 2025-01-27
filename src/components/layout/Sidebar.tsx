import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { adminPaths } from '../../routes/admin.routes';
import { sidebarGenerator } from '../../utlis/sidebar.generator';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';

const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student"
}

export default function Sidebar() {
    const role = "student";
    let sidebarItems;
    switch (role) {
        case userRole.ADMIN:
            sidebarItems = sidebarGenerator(adminPaths, userRole.ADMIN);
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarGenerator(facultyPaths, userRole.FACULTY);
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarGenerator(studentPaths, userRole.STUDENT)
            break
        default:
            break;
    }
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                // console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                // console.log(collapsed, type);
            }}
        >
            <div style={{ color: "white", height: "4rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>PH University</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    )
}
