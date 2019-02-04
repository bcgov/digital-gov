import React, { Component } from 'react';
import { graphql } from "gatsby";
// components
import Img from "gatsby-image";
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
        <Container css={{ marginTop: 55 }}>
          <Row>
            <Col md="8" sm="12">
              <Img fluid={data.file.childImageSharp.fluid} />
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

export const query = graphql`
  query {
    file(relativePath: { eq: "welcometothelab.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;