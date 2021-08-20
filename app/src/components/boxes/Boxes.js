import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Space, Popconfirm } from 'antd';

import { Heading } from '../layout/Heading';
import { fetchBoxes, deleteBox } from '../../shared/http';

export const Boxes = () => {

  const [boxes, setBoxes] = useState([]);

  const getBoxes = () => {
    fetchBoxes()
      .then(res => res.json())
      .then(res => setBoxes(
        res.map(box => (
          { ...box, key: box.id }
        ))
      ))
  }

  useEffect(() => getBoxes(), [])

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
            pathname: `/boxes/${record.id}/edit`,
            state: {
              record: record,
            }
          }}
          >
            Edit
          </Link>

          <Popconfirm
            title="Are you sure to delete this box?"
            onConfirm={async () => {
              await deleteBox(record.id)
              getBoxes()
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
        title="Boxes"
        link="/boxes/new"
        linkText="Add Box"
      />
      <Table columns={columns} dataSource={boxes} />
    </>
  )

}
