import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Space, Popconfirm } from 'antd';

import { Heading } from '../layout/Heading';
import { fetchBookShelves, deleteBookShelf } from '../../shared/http';

export const BookShelves = () => {

  const [bookshelves, setBookShelves] = useState([]);

  const getBookShelves = () => {
    fetchBookShelves()
      .then(res => res.json())
      .then(res => setBookShelves(
        res.map(bookshelf => (
          { ...bookshelf, key: bookshelf.id }
        ))
      ))
  }

  useEffect(() => getBookShelves(), [])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">

          <Link to={{
            pathname: `/bookshelves/${record.id}/edit`,
            state: {
              record: record,
            }
          }}
          >
            Edit
          </Link>

          <Popconfirm
            title="Are you sure to delete this book shelf?"
            onConfirm={async () => {
              await deleteBookShelf(record.id)
              getBookShelves()
            }}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Heading
        title="Book Shelves"
        link="/bookshelves/new"
        linkText="Add BookShelf"
      />
      <Table columns={columns} dataSource={bookshelves} />
    </>
  )

}
