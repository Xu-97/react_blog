import React from 'react'
import { Col, Row, Form, Input, Button} from 'antd'
import {addMessage} from '../../api/message'
import './index.css'
import { useDispatch } from 'react-redux/es/exports'
import { handleRefresh } from '../../store/modules/refresh'

export default function AddComment(props) {
  const { firstComment, handleRelpy, parentId, handleFefresh } = props
  const dispatch = useDispatch()
  // const { refresh } = useSelector(state => state.refresh)
  const [form] = Form.useForm()
  const onFinish = async (values) => {
    let data = values
    if(parentId) {
      data = Object.assign(values,{parentId})
    }else {
      data = Object.assign(values,{parentId:0})
    }
    console.log(data);
    const result = await addMessage(data)
    if (result.code === 200) {
      handleFefresh(true)
      handleRelpy(false)
      form.resetFields()
      dispatch(handleRefresh())
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleCancel = () => {
    handleRelpy(false)
    form.resetFields()
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
                  message: '请输入留言',
                },
              ]}
            >
              <Input.TextArea showCount maxLength={100} autoSize={{ minRows: 4}} placeholder ="您的留言" />
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
            <Input placeholder='您的昵称' />
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
            <Input placeholder='您的邮件地址' />
        </Form.Item>
        </Col>
        <Col span={8}>
        <Form.Item
          label="网址"
          name="webUrl"
        >
          <Input placeholder='你的网址' />
        </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item>
            <Button type="primary" htmlType="submit" className='add-comment-button'>
              提交
            </Button>
            {
              !firstComment ? <Button type="link" onClick={handleCancel}>取消</Button> : <></>
            }
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
