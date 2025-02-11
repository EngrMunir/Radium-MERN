import { Layout, Menu, MenuProps } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
    {
        key:'1',
        label:"Dashboard",
    },
    {
        key:'2',
        label:"Profile",
    },
    {
        key:'3',
        label:"User Management",
        children:[
            {
                key:'11',
                label:"Create Admin"
            },
            {
                key:'12',
                label:'Create User'
            }
        ]
    },
];

const MainLayout = () => {
    return (
        <Layout style={{height:'100vh'}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div style={{color:'white', textAlign:'center', height:'3rem', display:"flex", justifyContent:"center", justifyItems:"center"}}>
            <h1 style={{height:'100%'}}>Radium</h1>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <h1>The main content should go here</h1>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
};

export default MainLayout;