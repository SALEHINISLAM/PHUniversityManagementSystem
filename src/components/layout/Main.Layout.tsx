import { Layout, Menu, MenuProps, theme } from 'antd';
import { Outlet } from 'react-router';

const { Header, Content, Footer, Sider } = Layout;

const items:MenuProps["items"] = [
    {
        key:"1",
        label:"Dashboard",
    },
    {
        key:"2",
        label:"Profile",
    },
    {
        key:"3",
        label:"Settings",
        children:[
            {
                key:"3-1",
                label:"Edit Profile",
            },
            {
                key:"3-2",
                label:"Change Password",
            },
        ]
    }
]

export default function MainLayout() {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <Layout style={{height:"100vh"}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color:"white", height:"4rem",display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h1>PH University</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
            {/* <h1>The content will go here</h1> */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Salehin
        </Footer>
      </Layout>
    </Layout>
  )
}
