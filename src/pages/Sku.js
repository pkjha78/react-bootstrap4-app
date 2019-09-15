import React from 'react';
import {
  Container, Row, Col, Card, CardHeader, CardBody,
  Form,  FormGroup, Label, Input, Button, UncontrolledAlert
} from 'reactstrap';


class Sku extends React.Component {
  render() {
        return (
          <Container className="px-0">
            <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
            <Col xs={{ order: 1 }} md={{ size: 12, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
              <UncontrolledAlert color="danger" className="d-none d-lg-block">
                <strong>Account not activated.</strong>
              </UncontrolledAlert>
              <Card>
                <CardHeader> SKU Handling Unit</CardHeader>
                <CardBody>
                  <Form className="form">
                    <Col>
                      <FormGroup>
                        <Label className="sr-only" for="inlineFormInputGroupUsername">SKU ID:</Label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">SKU ID&nbsp;</div>
                          </div>
                          <Input
                            type="text"
                            name="tsuId"
                            id="tusId"
                            className="form-control"
                            placeholder="Scan/Enter SKU ID"
                            autofocus="autofocus"
                          />
                        </div>
                      </FormGroup>
                      <button className="ui-button mx-auto d-block">Submit</button>
                    </Col>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            </Row>
          </Container>
        )
  }
}

export default Sku;
