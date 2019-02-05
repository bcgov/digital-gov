import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import classes from './index.module.css';
// components
import Layout from '../hoc/Layout';
import { Container, Row, Col } from 'reactstrap';
import SidePanel from '../components/Home/SidePanel';
import Main from '../components/Home/Main';
import ConnectWithUs from '../components/Home/ConnectWithUs';
import Splash from '../components/Home/Splash';

export class Index extends Component {
  render() {
    // const colClass = css`
    //   padding: 25px;
    // `;

    const { data } = this.props;
    return (
      <Layout>
        {/* css prop is from emotion package */}
        <Splash imgUrl={data.splash.childImageSharp.fluid.src}>
          <div css={{ height: 450 }} />
        </Splash>
        <div css={{ flexGrow: 1 }}>
          <Container>
            <Row>
              <Col
                className={classes.col}
                md="6"
                css={css`
                  border: 0;
                  @media (min-width: 428px) {
                    border-right: 2px solid rgba(0, 0, 0, 0.1);
                  }
                `}
              >
                <Main />
              </Col>
              <Col className={classes.col} md="6">
                <SidePanel />
              </Col>
            </Row>
          </Container>
          <hr css={{ borderWidth: 3 }} />
          <Container css={{ marginBottom: 55, padding: '25px 0' }}>
            <Row>
              <Col className={classes.col} md="12">
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
    splash: file(relativePath: { eq: "splash.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1200, quality: 75) {
          src
        }
      }
    }
  }
`;
