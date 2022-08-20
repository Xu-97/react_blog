import React from 'react'
import { Form, Input, Button } from 'antd'

export default function AddComment() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }
  return (
    <Form
      name='comment-form'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="昵称"
        name="nickname"
        rules={[
          {
            required: true,
            message: '请输入昵称!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="电子邮箱"
        name="qq"
        rules={[
          {
            required: true,
            message: '请输入电子邮件!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
