import { Form, Input, Button } from 'antd';
import { useLocation, useHistory } from 'react-router';

import { Heading } from '../layout/Heading';
import { createBookShelf, updateBookShelf } from '../../shared/http';

export const BookShelfForm = (props) => {
  const [form] = Form.useForm()
  const history = useHistory()

  const location = useLocation()
  const { record } = location.state || { record: null }

  let actionType = record ? "PATCH" : "POST"

  record && form.setFieldsValue({
    ...record
  })

  const onFinish = async values => {
    if (actionType === "POST")
      await createBookShelf(values)
    else
      await updateBookShelf({ ...record, ...values })

    history.push("/bookshelves")
  }

  const buttonLable = actionType === "POST" ? "Create" : "Update"
  const heading = actionType === "POST" ? "Add BookShelf" : "Edit BookShelf"

  return (
    <>
      <Heading title={heading} />
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
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