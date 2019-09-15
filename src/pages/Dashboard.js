import React from 'react';
import { Row, Col } from 'reactstrap';
import {
  Button, Card, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';
import SideCard from './SideCard';
import Post from './Post';

export default () => (
    <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
  		<Col xs={{ order: 2 }} md={{ size: 3, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
        <Card>
          <CardBody>
            <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Visits Today</CardTitle>
            <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>4,332</CardSubtitle>
            <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button color="success" className="font-weight-bold">Card link</Button>
          </CardBody>
        </Card>
      </Col>
  		<Col xs={{ order: 1 }} md={{ size: 3, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
        <Card>
          <CardBody>
            <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Revenue Breakdown</CardTitle>
            <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>This Period</CardSubtitle>
            <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button color="success" className="font-weight-bold">Card link</Button>
          </CardBody>
        </Card>
  		</Col>
      <Col xs={{ order: 1 }} md={{ size: 3, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
  		</Col>
    </Row>
);
