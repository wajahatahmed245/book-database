import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Space, Popconfirm } from 'antd';

import { Heading } from '../layout/Heading';
import { fetchAuthors, deleteAuthor } from '../../shared/http';

export const Authors = () => {

  const [authors, setAuthors] = useState([]);

  const getAuthors = () => {
    fetchAuthors()
      .then(res => res.json())
      .then(res => setAuthors(
        res.map(author => (
          { ...author, key: author.id }
        ))
      ))
  }

  useEffect(() => getAuthors(), [])

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">

          <Link to={{
            pathname: `/authors/${record.id}/edit`,
            state: {
              record: record,
            }
          }}
          >
            Edit
          </Link>

          <Popconfirm
            title="Are you sure to delete this author?"
            onConfirm={async () => {
              await deleteAuthor(record.id)
              getAuthors()
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
        title="Authors"
        link="/authors/new"
        linkText="Add Author"
      />
      <Table columns={columns} dataSource={authors} />
    </>
  )

}
