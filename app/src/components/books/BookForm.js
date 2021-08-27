import { Form, Input, Button, Select } from 'antd';
import { useLocation, useHistory } from 'react-router';
import { useEffect, useState } from 'react';

import { Heading } from '../layout/Heading';
import {
  createBook,
  updateBook,
  fetchAuthors,
  fetchBookShelves,
  fetchBoxes,
  fetchTopics
} from '../../shared/http';
import { getStoragePlaceIcon } from '../../shared/utils';

const { Option } = Select;

export const BookForm = (props) => {
  const [form] = Form.useForm()
  const history = useHistory()

  const [authors, setAuthors] = useState([])
  const [bookshelves, setBookShelves] = useState([])
  const [boxes, setBoxes] = useState([])
  const [topics, setTopics] = useState([])

  const getAuthors = () => {
    fetchAuthors()
      .then(res => res.json())
      .then(res => setAuthors(
        res.map(author => (
          { ...author, key: author.id }
        ))
      ))
  }

  const getBookShelves = () => {
    fetchBookShelves()
      .then(res => res.json())
      .then(res => setBookShelves(
        res.map(bookshelf => (
          { ...bookshelf, key: bookshelf.id }
        ))
      ))
  }

  const getBoxes = () => {
    fetchBoxes()
      .then(res => res.json())
      .then(res => setBoxes(
        res.map(box => (
          { ...box, key: box.id }
        ))
      ))
  }

  const getTopics = () => {
    fetchTopics()
      .then(res => res.json())
      .then(res => setTopics(
        res.map(topic => (
          { ...topic, key: topic.id }
        ))
      ))
  }

  const location = useLocation()
  const { record } = location.state || { record: null }

  let actionType = record ? "PATCH" : "POST"

  useEffect(async () => {
    await getAuthors()
    await getBookShelves()
    await getBoxes()
    await getTopics()    
  }, [])

  record && form.setFieldsValue({
    title: record.title,
    author_id: record.author_id,
    topic_id: record.topic_id,
    storage_place: `${record.storage_place_type},${record.storage_place_id}`
  })

  const onFinish = async values => {
    if (actionType === "POST")
      await createBook(values)
    else
      await updateBook({ ...record, ...values })

    history.push("/books")
  }

  const buttonLable = actionType === "POST" ? "Create" : "Update"
  const heading = actionType === "POST" ? "Add Book" : "Edit Book"

  return (
    <>
      <Heading title={heading} />
      <Form form={form} onFinish={onFinish}>

        <Form.Item name="title" label="Title" rules={[{ required: true, min: 3, message: 'Please enter valid title with at least 3 characters.' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="author_id" label="Author" rules={[{ required: true, message: 'Please select an author.' }]}>
          <Select
            placeholder="Select an author"
            allowClear
          >
            {authors.map((author) => <Option value={author.id}>{author.full_name}</Option>)}
          </Select>
        </Form.Item>

        <Form.Item name="topic_id" label="Topic" rules={[{ required: true, message: 'Please select an topic.' }]}>
          <Select
            placeholder="Select a topic"
            allowClear
          >
            {topics.map((topic) => <Option value={topic.id}>{topic.name}</Option>)}
          </Select>
        </Form.Item>

        <Form.Item name="storage_place" label="Storage Place" rules={[{ required: true, message: 'Please select an storage place.' }]}>
          <Select
            placeholder="Select a storage place"
            allowClear
          >
            {boxes.concat(bookshelves).map((place) => {
              let value = `${place.storage_place_type},${place.id}`
              return <Option value={value}>{getStoragePlaceIcon(place.storage_place_type)} {place.name}</Option>
            })
            }
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {buttonLable}
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}