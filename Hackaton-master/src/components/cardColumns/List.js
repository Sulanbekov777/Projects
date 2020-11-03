import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import HomeCardColumns from './HomeCardColumns'

function List(props) {
  return (
    <Container className="mt-3 d-flex">
      <Row>
        {props.data.map((item) => (
          <Col md={4} key={item.id}>
            <HomeCardColumns item={item}></HomeCardColumns>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default List
