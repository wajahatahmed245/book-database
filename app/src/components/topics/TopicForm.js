import { Form, Input, Button } from 'antd';
import { useLocation, useHistory } from 'react-router';

import { Heading } from '../layout/Heading';
import { createTopic, updateTopic } from '../../shared/http';

export const TopicForm = () => {
  const [form] = Form.useForm()
  const history = useHistory()

  const location = useLocation()
  const { record } = location.state || { record: null }

  let actionType = record ? "PATCH" : "POST"

  record && form.setFieldsValue({
    name: record.name
  })

  const onFinish = async values => {
    if(actionType === "POST")
      await createTopic(values)
    else 
      await updateTopic({...record, ...values})

    history.push("/topics")
  }

  const buttonLable = actionType === "POST" ? "Create" : "Update"
  const heading = actionType === "POST" ? "Add Topic" : "Edit Topic"

  return (
    <>
      <Heading title={heading} />
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true, min: 3 }]}>
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