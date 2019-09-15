import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Badge } from 'reactstrap';

class AirPick extends Component {
  render() {
    return (
      <Fragment>
        <div className="position-relative">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            AIRPICK
            <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>New</Badge>
          </span>
          <span className="d-block pb-4 h2 text-dark border-bottom border-gray">The ideal solution</span>
          <article className="pt-1 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
          <p>E-commerce and omni-channel warehouses and distribution centres (DCs) are challenged to fulfil thousands of orders with ever-increasing service level requirements. However, it is difficult to accommodate time-critical processes in a DC that may not be optimised to meet these requirements. Unpredictable demand and seasonal trends call for flexibility. Warehouses and DCs have to cope with the changing – and increasing – variety of stored products and order volumes. They also need to efficiently handle the expanding number of returns.
          </p><p>
          As part of our next generation of scalable solutions – evolutions – Vanderlande offers AIRPICK, which seamlessly integrates innovative systems, intelligent software and life-cycle services. This solution combines efficient picking with flawless automated sortation to individual orders in our pocket sorter, AIRTRAX Pocket. AIRPICK can sort an extremely wide range of products at a low investment level.
          </p>
          <hr />
          <h5>AIRPICK offers:</h5>
          <ul>
          <li>efficient picking</li>
          <li>smart handling of returned goods</li>
          <li>easy processing of varying order lead-times</li>
          <li>flexibility in product handling.</li>
          </ul>
          </article>
        </div>
      </Fragment>
    );
  }
}

export default AirPick;
