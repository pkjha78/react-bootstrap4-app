import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import {
  Container, Row, Col, Card, CardImg, CardHeader, CardTitle, CardSubtitle, CardText, CardBody,
  Form,  FormGroup, Label, Input, Button, UncontrolledAlert
} from 'reactstrap';
import AirPick from './AirPick';

export function Home(){
  const BANNER = 'https://www.vanderlande.com/media/1485/infographic-airpick_10430.png';
  return (
    <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
  		<Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
        <Card>
          <CardImg top width="100%" src={BANNER} alt="banner" />
          <CardBody>
            <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">AIRPICK</CardTitle>
            <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>WAREHOUSING - evolutions</CardSubtitle>
            <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>The demands of modern society mean that e-commerce and omni-channel warehouses and distribution centres must fulfil thousands of orders with ever-increasing service level requirements.</CardText>
            <a target="_blank" href='https://www.vanderlande.com/insights/airpick-matching-consumer-demand/'>
              <Button color="success" className="font-weight-bold">Read More</Button>
            </a>
          </CardBody>
        </Card>
      </Col>
  		<Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
          <AirPick />
  		</Col>
    </Row>
  )
}

export const Page2 = () => (
    <div>
        <h1>Page2</h1>
    </div>
)

export const Page3 = () => (
    <div>
        <h1>Page3</h1>
    </div>
)

export const Page4 = () => (
    <div>
        <h1>Page4</h1>
    </div>
)
