import React, { Component } from 'react';
import { graphql } from 'gatsby';
// components
import Img from 'gatsby-image';
import Layout from '../hoc/Layout';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { HOMEPAGE_CONTENT } from './content';
export class Index extends Component {
  render() {
    const { data } = this.props;

    return (
      <Layout>
        {/* css prop is from emotion package */}
        <Container css={{ margin: '55px auto' }}>
          <Row>
            <Col md="7" sm="12" css={{ padding: 0 }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </Col>
            <Col md="5" sm={{ size: 6 }}>
              <main
                css={{
                  marginTop: 25,
                }}
              >
                <h2>With a digital mindset and methods we can:</h2>
                <ol>
                  <li>Deliver better services to citizens</li>
                  <li>Make better decisions about polices</li>
                  <li>Achieve better value from our investments</li>
                </ol>
              </main>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 10, offset: 1 }} css={{ marginTop: 20 }}>
              <section>
                <h2>
                  <strong>
                    The Continuous Service Improvement (CSI) lab is a space where we are learning to
                    do this better
                  </strong>
                </h2>
                <p>
                  A CSI Lab residency is for Leaders who want to offer exemplary service, optimize
                  tax dollars, and build high performing modern organizations: <br />
                  The CSI lab creates and accelerates high performing teams that rapidly engage
                  people, design, make, and ship service improvements using modern methods.
                </p>
                <p>
                  Unlike team retreats, courses, and consultant reports, The CSI lab invests heavily
                  in learning by doing, with the support of Agile methods, service design, modern
                  technology, and community.
                </p>
              </section>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Index;

export const query = graphql`
  query {
    file(relativePath: { eq: "welcometothelab.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
