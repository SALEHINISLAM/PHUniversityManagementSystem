import { ReactNode } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { useCurrentToken } from '../../redux/feature/auth/AuthSlice'
import { Navigate } from 'react-router'

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const token = useAppSelector(useCurrentToken)
    if (!token) {
        return <Navigate to={"/login"} replace={true} />
    }
    return children
}
