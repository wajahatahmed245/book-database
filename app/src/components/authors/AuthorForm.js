import { Form, Input, Button } from 'antd';
import { useLocation, useHistory } from 'react-router';

import { Heading } from '../layout/Heading';
import { createAuthor, updateAuthor } from '../../shared/http';

export const AuthorForm = (props) => {
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
      await createAuthor(values)
    else
      await updateAuthor({ ...record, ...values })

    history.push("/authors")
  }

  const buttonLable = actionType === "POST" ? "Create" : "Update"
  const heading = actionType === "POST" ? "Add Author" : "Edit Author"

  return (
    <>
      <Heading title={heading} />
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="first_name" label="First Name" rules={[{ required: true, min: 3, message: 'Please enter a valid first name with at least 3 characters.' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="last_name" label="Last Name" rules={[{ required: true, min: 3, message: 'Please enter a valid last name with at least 3 characters.' }]}>
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