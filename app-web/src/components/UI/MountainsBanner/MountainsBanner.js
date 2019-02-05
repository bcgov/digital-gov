/*
Copyright 2019 Province of British Columbia

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at 

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Created by Patrick Simonian
*/
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

// sets a background image to be the mountains asset we have with some filters
// applied to make it look shnazzier
const MountainsBanner = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          m1: file(relativePath: { eq: "mountain.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fluid(
                duotone: { highlight: "#88ad38", shadow: "#002266" }
                maxWidth: 1200
                quality: 75
              ) {
                src
              }
            }
          }
          m2: file(relativePath: { eq: "mountain.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fluid(
                duotone: { highlight: "#fafafa", shadow: "#002266" }
                maxWidth: 1500
                quality: 75
              ) {
                src
              }
            }
          }
          m3: file(relativePath: { eq: "mountain.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fluid(
                duotone: { highlight: "#007bff", shadow: "#95b5d4" }
                maxWidth: 1200
                quality: 75
              ) {
                src
              }
            }
          }
        }
      `}
      render={data => {
        // for container holding all mountins
        const Wrapper = styled.div`
          position: relative;
        `;

        const MountainDiv = styled.div`
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        `;
        return (
          <Wrapper>
            <MountainDiv
              style={{
                backgroundImage: `url(${data.m1.childImageSharp.fluid.src})`,
                opacity: 0.97,
                transform: 'rotateY(180deg)',
              }}
            />
            <MountainDiv
              style={{
                backgroundImage: `url(${data.m3.childImageSharp.fluid.src})`,
              }}
            />
            <MountainDiv
              style={{
                backgroundImage: `url(${data.m2.childImageSharp.fluid.src})`,
              }}
            />
            {children}
          </Wrapper>
        );
      }}
    />
  );
};

export default MountainsBanner;
