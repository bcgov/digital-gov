import React, { Component } from 'react';
// components
import Layout from '../hoc/Layout';
import { Container, Row, Col } from 'reactstrap';

export class Index extends Component {
  render() {
    return (
      <Layout>
        {/* css prop is from emotion package */}
        <Container css={{ marginTop: 55 }}>
          <Row>
            <Col md="8" sm="12">
              Image will be here
            </Col>
            <Col md="4" sm={{ size: 6, offset: 3 }}>
              <main>
                <h2>CSI Lab</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur vulputate
                  maximus. Sed nibh nisi, sagittis in ex non, elementum suscipit turpis. Cras et
                  nulla eros.
                </p>
              </main>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Index;
