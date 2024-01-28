import React from 'react'
import { Button, Form, Input, Radio } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

function Add() {
  return (
    <>
      <h5>   <span style={{paddingInlineEnd:'20px'}}><Link to="/"><ArrowLeftOutlined/> </Link></span>  Add Page</h5>
      <br/>
      <Form layout='vertical'>
        <Form.Item label="Task Name">
        <Input placeholder="input your task" />
      </Form.Item>
       
      <Form.Item  >
        <Button type="primary" block={true}>Submit</Button>
      </Form.Item>
      </Form>
      
    </>
  )
}

export default Add
