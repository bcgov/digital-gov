import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import classes from './index.module.css';
import { LAB_PROJECTS } from '../constants/ui';
// components
import Layout from '../hoc/Layout';
import { Container, Row, Col } from 'reactstrap';
import SidePanel from '../components/Home/SidePanel';
import Main from '../components/Home/Main';
import ConnectWithUs from '../components/Home/ConnectWithUs';
import Splash from '../components/Home/Splash';
import LabProjects from '../components/Home/LabProjects';

export class Index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Splash imgUrl={data.splash.childImageSharp.fluid.src} />
        <div css={{ flexGrow: 1 }}>
          <Container>
            <Row className={classes.row}>
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
          <Container css={{ marginBottom: 55 }}>
            <Row>
              <Col className={classes.col} md="12">
                <ConnectWithUs />
              </Col>
            </Row>
            <Row>
              <Col className={classes.col} md="12">
                <LabProjects projects={LAB_PROJECTS} />
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
