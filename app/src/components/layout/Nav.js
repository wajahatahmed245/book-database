import { useState } from 'react';
import { Link } from "react-router-dom";

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
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Row justify={"center"} align={"middle"} style={{marginTop: "5vh", marginBottom: "5vh"}} >
        <Col span={16}>
        </Col>

        <Col span={16}>
        </Col>

        <Col span={16} >
          <Button onClick={() => setVisible(true)}  style={{ position: 'relative', left: '63vw', zIndex: 2 }} >
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
            >
              <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>

              <SubMenu icon={<BookOutlined />} title="Books">
                <Menu.Item>
                  <Link to="/books">Books List</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/books/new">Add Books</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu icon={<UserOutlined />} title="Authors">
                <Menu.Item>
                  <Link to="/authors">Authors List</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/authors/new">Add Author</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu icon={<UnorderedListOutlined />} title="Topics">
                <Menu.Item>
                  <Link to="/topics">Topics List</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/topics/new">Add Topic</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu icon={<InboxOutlined />} title="Boxes">
                <Menu.Item>
                  <Link to="/boxes">Boxes List</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/boxes/new">Add Box</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu icon={<DatabaseOutlined />} title="Book Shelves">
                <Menu.Item>
                  <Link to="/bookshelves">Book Shelves List</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/bookshelves/new">Add Book Shelf</Link>
                </Menu.Item>
              </SubMenu>

            </Menu>

          </Drawer>
        </Col>
      </Row>

    </>
  )
}