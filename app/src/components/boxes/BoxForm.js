import { Form, Input, Button } from 'antd';
import { useLocation, useHistory } from 'react-router';

import { Heading } from '../layout/Heading';
import { createBox, updateBox } from '../../shared/http';

export const BoxForm = (props) => {
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
      await createBox(values)
    else
      await updateBox({ ...record, ...values })

    history.push("/boxes")
  }

  const buttonLable = actionType === "POST" ? "Create" : "Update"
  const heading = actionType === "POST" ? "Add Box" : "Edit Box"

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