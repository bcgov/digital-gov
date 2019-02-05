import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
// components
import NonStretchedImg from '../components/Ui/NonStretchedImg/NonStretchImg';
import Layout from '../hoc/Layout';
import { Container, Row, Col } from 'reactstrap';
import SidePanel from '../components/Home/SidePanel';
import Main from '../components/Home/Main';
import ConnectWithUs from '../components/Home/ConnectWithUs';

import { mainGradientBG } from '../constants/styles';

export class Index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        {/* css prop is from emotion package */}
        <div css={{ backgroundColor: '#f2f2f2', color: '#444', paddingTop: 35 }}>
          <Container>
            <Row>
              <Col md="12" css={{ padding: 0 }}>
                <NonStretchedImg fluid={data.file.childImageSharp.fluid} alt="image of CSI Lab" />
              </Col>
            </Row>
          </Container>
        </div>
        <div css={[mainGradientBG, { flexGrow: 1, padding: '25px 0 44px' }]}>
          <Container css={{ marginBottom: 25 }}>
            <Row>
              <Col
                md={{ size: 8 }}
                css={css`
                  border: 0;
                  @media (min-width: 428px) {
                    border-right: 2px solid rgba(0, 0, 0, 0.1);
                  }
                `}
              >
                <Main />
              </Col>
              <Col md="4">
                <SidePanel />
              </Col>
            </Row>
            <hr css={{ borderWidth: 3 }} />
            <Row>
              <Col md={{ size: 6, offset: 3 }}>
                <ConnectWithUs />
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
        fluid(maxWidth: 550, quality: 99) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
