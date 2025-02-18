import CreateAdmin from '../pages/admin/userManagement/CreateAdmin';
import CreateFaculty from '../pages/admin/userManagement/CreateFaculty';
import AdminDashboard from '../pages/admin/Dashboard';
import CreateStudent from '../pages/admin/userManagement/CreateStudent';
import AcademicSemester from '../pages/admin/academicManagement/AcademicSemester';
import CreateAcademicSemester from '../pages/admin/academicManagement/CreateAcademicSemester';
import CreateAcademicFaculty from '../pages/admin/academicManagement/CreateAcademicFaculty';
import AcademicFaculty from '../pages/admin/academicManagement/AcademicFaculty';
import CreateAcademicDepartment from '../pages/admin/academicManagement/CreateAcademicDepartment';
import AcademicDepartment from '../pages/admin/academicManagement/AcademicDepartment';

export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />,
    },
    {
        index: true,
        path: 'dashboard',
        element: <AdminDashboard />,
    },
    {
        name: "Academic Management",
        children: [
            {
                name: "Create A. Semester",
                path: 'create-academic-semester',
                element: <CreateAcademicSemester />,
            },
            {
                name: "Academic Semester",
                path: 'academic-semester',
                element: <AcademicSemester />,
            },
            {
                name: "Create A. Faculty",
                path: 'create-academic-faculty',
                element: <CreateAcademicFaculty />,
            },
            {
                name: "Academic Faculty",
                path: 'academic-faculty',
                element: <AcademicFaculty />,
            },
            {
                name: "Create A. Department",
                path: 'create-academic-department',
                element: <CreateAcademicDepartment />,
            },
            {
                name: "Academic Department",
                path: 'academic-department',
                element: <AcademicDepartment />,
            },
        ]
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />,
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />,
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />,
            },
        ],
    },
];

