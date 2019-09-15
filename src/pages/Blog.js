import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import SideCard from './SideCard';
import Post from './Post';

export const Blog = () => (
  <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
    <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
        <SideCard />
    </Col>
    <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
        <Post />
    </Col>
  </Row>
)
