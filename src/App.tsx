
import './App.css'
import React from 'react';
import { Button, Space } from 'antd';
import { Card, Col, Row } from 'antd';
function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline bg-fuchsia-600">
        Hello world!
      </h1>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Button type="primary" block>
          Primary
        </Button>
        <Button block>Default</Button>
        <Button type="dashed" block>
          Dashed
        </Button>
        <Button disabled block>
          disabled
        </Button>
        <Button type="text" block>
          text
        </Button>
        <Button type="link" block>
          Link
        </Button>
      </Space>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" className='h-full' bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" className='h-full' bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" className='h-full' bordered={false}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla dolores molestias rerum dolorem facilis in sunt unde necessitatibus, corrupti cupiditate quidem nemo officiis veniam id quaerat ad sapiente. Odit iste rem est veniam doloremque doloribus dolorem dolores et, vel nemo quasi, assumenda impedit ullam veritatis quo placeat, eum numquam? Explicabo?
          </Card>
        </Col>
      </Row>
    </>

  )
}

export default App
