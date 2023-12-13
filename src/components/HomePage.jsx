import React from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic } from 'antd'
import { Link } from 'react-router-dom'

const {Title} =Typography;
const HomePage = () => {
  return (
    <div>
      <Title level={2} className='heading'>Global cypto stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrenices" value="5" /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
        <Col span={12}><Statistic title="Total 24th volume" value="5" /></Col>
        <Col span={12}><Statistic title="Total Markets" value="5" /></Col>
      </Row>
    </div>
  )
}

export default HomePage