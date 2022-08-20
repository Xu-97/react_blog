import React from 'react'
import { Col, Row, Form, Input, Button} from 'antd'
import './index.css'

export default function AddComment() {
  const [form] = Form.useForm()

  // const label = () =>{
  //   return (
  //     <div>
  //       <img src="http://q.qlogo.cn/headimg_dl?dst_uin=2603029264@qq.com&spec=100" alt="" />
  //     </div>
  //   )
  // }
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Form
      name='comment-form'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
      layout="Horizontal"
    >
      <Row>
          <Col span={24}>
            <Form.Item
              name="message"
              label="留言"
              rules={[
                {
                  required: true,
                  message: '请输入',
                },
              ]}
            >
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>
          </Col>
      </Row>
      <Row>
        <Col span={8}>
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
        </Col>
        <Col span={8}>
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
        </Col>
        <Col span={8}>
        <Form.Item
          label="网址"
          name="webUrl"
        >
          <Input />
        </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={6}>
          <Form.Item>
            <Button type="primary" htmlType="submit" className='add-comment-button'>
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
