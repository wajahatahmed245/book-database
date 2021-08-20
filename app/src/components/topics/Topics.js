import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Space, Popconfirm } from 'antd';

import { Heading } from '../layout/Heading';
import { fetchTopics, deleteTopic } from '../../shared/http';

export const Topics = () => {

  const [topics, setTopics] = useState([]);

  const getTopics = () => {
    fetchTopics()
      .then(res => res.json())
      .then(res => setTopics(
        res.map(topic => (
          { ...topic, key: topic.id }
        ))
      ))
  }

  useEffect(() => getTopics(), [])

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
            pathname: `/topics/${record.id}/edit`,
            state: {
              record: record,
            }
          }}
          >
            Edit
          </Link>

          <Popconfirm
            title="Are you sure to delete this topic?"
            onConfirm={async () => {
              await deleteTopic(record.id)
              getTopics()
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
        title="Topics"
        link="/topics/new"
        linkText="Add Topic"
      />
      <Table columns={columns} dataSource={topics} />
    </>
  )

}
