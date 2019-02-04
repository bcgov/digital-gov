import React, { Component } from 'react';
import { graphql } from 'gatsby';
// components
import Img from 'gatsby-image';
import Layout from '../hoc/Layout';
import { Container, Row, Col } from 'reactstrap';
import SidePanel from '../components/Home/SidePanel';
import Main from '../components/Home/Main';
import { mainGradientBG } from '../constants/styles';

export class Index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        {/* css prop is from emotion package */}
        <div css={{ backgroundColor: '#f2f2f2', color: '#444' }}>
          <Container css={{ border: '1px solid #ccc' }}>
            <Row>
              <Col md="7" sm="12" css={{ padding: 0 }}>
                <Img fluid={data.file.childImageSharp.fluid} alt="image of CSI Lab" />
              </Col>
              <Col md="5" sm={{ size: 6 }}>
                <SidePanel />
              </Col>
            </Row>
          </Container>
        </div>
        <div css={[mainGradientBG, { flexGrow: 1, paddingTop: 25 }]}>
          <Container>
            <Row>
              <Col md={{ size: 10, offset: 1 }} css={{ marginTop: 20 }}>
                <Main />
              </Col>
            </Row>
          </Container>
        </div>
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
