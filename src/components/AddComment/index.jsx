import React from 'react'
import { Col, Row, Form, Input, Button} from 'antd'
import { useDispatch } from 'react-redux/es/exports'
import { handleListenr } from '../../store/modules/comment'
import {addMessage} from '../../api/message'

export default function AddComment(props) {
  const { firstComment, handleRelpy, parentId } = props
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const onFinish = async (values) => {
    values.message =  values.message.replace(/\n/g,'<br/>')
    let data = values
    if(parentId) {
      data = Object.assign(values,{parentId})
    }else {
      data = Object.assign(values,{parentId:0})
    }
    const result = await addMessage(data)
    if (result.code === 200) {
      form.resetFields()
      dispatch(handleListenr())
      if(firstComment) {
        return
      }else{
        handleRelpy(false)
      }
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleCancel = () => {
    form.resetFields()
    handleRelpy(false)
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
          <span className='tips' style={ {fontSize: '12px',color: '#657786'}}>tips:建议填写QQ邮箱</span>
        </Col>
      </Row>
    </Form>
  )
}
