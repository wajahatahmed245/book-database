import { Row, Col } from 'antd';

export const CenterRow = ({ children }) => {
  return (
    <>
      <Row justify={"center"} align={"middle"} style={{ minHeight: '100vh' }}>
        <Col span={16}>
        </Col>

        <Col span={16}>
          {children}
        </Col>

        <Col span={16}>
        </Col>
      </Row>
    </>
  )
}