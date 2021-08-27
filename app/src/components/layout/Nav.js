import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useLocation, useHistory } from 'react-router';

import { Drawer, Button, Row, Col, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  MenuOutlined,
  UnorderedListOutlined,
  InboxOutlined,
  DatabaseOutlined,
  BookOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

export const Nav = () => {
  const location = useLocation()

  const [visible, setVisible] = useState(false)
  const [openKeys, setOpenKeys] = useState([location.pathname.split("/").slice(0, 2).join("/")])

  return (
    <>
      <Row justify={"center"} align={"middle"} style={{ marginTop: "5vh", marginBottom: "5vh" }} >
        <Col span={16}>
        </Col>

        <Col span={16}>
        </Col>

        <Col span={16} >
          <Button onClick={() => setVisible(true)} style={{ position: 'relative', left: '63vw', zIndex: 2 }} >
            <MenuOutlined />
          </Button>

          <Drawer
            title="Links"
            placement="right"
            closable={true}
            onClose={() => setVisible(false)}
            visible={visible}
            bodyStyle={{ padding: 0 }}
          >
            <Menu
              style={{ width: 512 }}
              mode="inline"
              defaultSelectedKeys={['/']}
              selectedKeys={[location.pathname]}
              openKeys={openKeys}
              onOpenChange={keys => setOpenKeys(keys.slice(-1)) }
            >
              <Menu.Item key="/" icon={<HomeOutlined />}>
                <NavLink to="/">Home</NavLink>
              </Menu.Item>

              <SubMenu key="/books" icon={<BookOutlined />} title="Books">
                <Menu.Item key="/books">
                  <NavLink to="/books">Books List</NavLink>
                </Menu.Item>
                <Menu.Item key="/books/new">
                  <NavLink to="/books/new">Add Books</NavLink>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="/authors" icon={<UserOutlined />} title="Authors">
                <Menu.Item key="/authors">
                  <NavLink to="/authors">Authors List</NavLink>
                </Menu.Item>
                <Menu.Item key="/authors/new">
                  <NavLink to="/authors/new">Add Author</NavLink>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="/topics" icon={<UnorderedListOutlined />} title="Topics">
                <Menu.Item key="/topics">
                  <NavLink to="/topics">Topics List</NavLink>
                </Menu.Item>
                <Menu.Item key="/topics/new">
                  <NavLink to="/topics/new">Add Topic</NavLink>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="/boxes" icon={<InboxOutlined />} title="Boxes">
                <Menu.Item key="/boxes">
                  <NavLink to="/boxes">Boxes List</NavLink>
                </Menu.Item>
                <Menu.Item key="/boxes/new">
                  <NavLink to="/boxes/new">Add Box</NavLink>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="/bookshelves" icon={<DatabaseOutlined />} title="Book Shelves">
                <Menu.Item key="/bookshelves">
                  <NavLink to="/bookshelves">Book Shelves List</NavLink>
                </Menu.Item>
                <Menu.Item key="/bookshelves/new">
                  <NavLink to="/bookshelves/new">Add Book Shelf</NavLink>
                </Menu.Item>
              </SubMenu>

            </Menu>

          </Drawer>
        </Col>
      </Row>

    </>
  )
}