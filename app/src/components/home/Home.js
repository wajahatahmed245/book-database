import { Form, Input, Button, Typography, Space } from 'antd'

import { Heading } from '../layout/Heading'
import { searchBooks } from '../../shared/http'
import { useState } from 'react'
import { BooksTable } from '../books/BooksTable'

const { Title } = Typography

export const Home = (props) => {
  const [form] = Form.useForm()
  const [results, setResults] = useState([])
  const [hasResults, setHasResults] = useState(false)

  const onFinish = async values => {
    searchBooks(values.query)
      .then(res => res.json())
      .then(res => { setResults(res); return res })
      .then(res => res.length > 0 ? setHasResults(true) : null)
  }

  const handleBookDelete = (book) => {
    setResults(results.filter(result => book.id != result.id))
  }

  return (
    <>
      <Title>Book Database</Title>

      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="query" rules={[{ required: true }]}>
          <Input placeholder="Search by book's title, authors, topics and storage places" />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button htmlType="button" onClick={() => { form.resetFields(); setHasResults(false) } }>
              Clear
            </Button>
          </Space>
        </Form.Item>
      </Form>

      {
        hasResults ?
          <>
            <Title level={4}>Results</Title>
            <BooksTable books={results} handleBookDelete={handleBookDelete} />
          </> : null
      }
    </>
  )
}