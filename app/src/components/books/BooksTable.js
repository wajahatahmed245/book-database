import { Link } from 'react-router-dom';
import { Table, Space, Popconfirm } from 'antd';

import { deleteBook } from '../../shared/http';
import { getStoragePlaceIcon } from '../../shared/utils';

export const BooksTable = ({ books, handleBookDelete }) => {

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Topic',
      dataIndex: 'topic',
    },
    {
      title: 'Storage Place',
      dataIndex: 'storage_place',
      render: (text, record) => {
        return <span>{getStoragePlaceIcon(record.storage_place_type)} {record.storage_place}</span>
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">

          <Link to={{
            pathname: `/books/${record.id}/edit`,
            state: {
              record: record,
            }
          }}
          >
            Edit
          </Link>

          <Popconfirm
            title="Are you sure to delete this book?"
            onConfirm={async () => {
              await deleteBook(record.id)
              handleBookDelete(record)
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
      <Table columns={columns} dataSource={books} />
  )

}
