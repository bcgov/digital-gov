import React, { Component } from 'react';
// components
import Layout from '../hoc/Layout';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { HOMEPAGE_CONTENT } from './content';
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
                <h2>
                  <FormattedMessage {...HOMEPAGE_CONTENT.title} />
                </h2>
                <p>
                  <FormattedMessage {...HOMEPAGE_CONTENT.introDescription} />
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
