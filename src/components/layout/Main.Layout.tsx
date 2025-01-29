import { Button, Layout, theme } from 'antd';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/feature/auth/AuthSlice';

const { Header, Content } = Layout;

export default function MainLayout() {
  const dispatch = useAppDispatch()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleLogOut = async () => {
    dispatch(logout())
  }
  return (
    <Layout style={{height:"100%"}}>
      <Sidebar />
      <Layout>
        <Header><Button onClick={handleLogOut}>LogOut</Button> </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
            {/* <h1>The content will go here</h1> */}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
