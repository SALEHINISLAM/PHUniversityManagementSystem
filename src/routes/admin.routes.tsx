import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import AdminDashboard from '../pages/admin/Dashboard';
import CreateStudent from '../pages/admin/CreateStudent';
import AcademicSemester from '../pages/admin/academicSemester/AcademicSemester';

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
                name: "Academic Semester",
                path: 'academic-semester',
                element: <AcademicSemester />,
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

