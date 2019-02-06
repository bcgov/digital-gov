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
import styled from '@emotion/styled';

const LI_WIDTH = 200;
const MAX_COLUMNS = 4.5;

const LI = styled.li`
  box-sizing: border-box;
  background-color: #036;
  color: #fff;
  letter-spacing: 1px;
  min-height: 82px;
  margin: 10px;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.15);
  :hover {
    transform: translateY(-4px);
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15);
    transition: all 0.25s ease-out;
  }
  flex-grow: 1;
  flex-basis: ${LI_WIDTH}px;
  @media (min-width: 478px) {
    flex-grow: 0;
  }
`;

const A = styled.a`
  padding: 10px;
  display: inline-block;
  color: inherit;
  :hover {
    text-decoration: none;
    color: #fff;
  }
  :visited {
    color: #fff;
  }
`;

const UL = styled.ul`
  display: flex;
  list-style: none;
  flex-flow: row wrap;
  padding-left: 0;
  align-items: stretch;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${LI_WIDTH * MAX_COLUMNS}px;
`;

const LabProjects = () => (
  <article css={{ textAlign: 'center' }}>
    <h1> See what we're building!</h1>
    <p>
      Here's a sample of the products our resident teams have built and are continuously improving.
    </p>
    <UL>
      <LI>
        <A href="https://projects.eao.gov.bc.ca">
          EAO Project Information and Collaboration (EPIC)
        </A>
      </LI>
      <LI>
        <A href="https://comment.nrs.gov.bc.ca">Public Review and Comment (PRC)</A>
      </LI>
      <LI>
        <A href="www2.gov.bcc.ca/gov/content">GroundWater Wells and Aquifers (GWELLS)</A>
      </LI>
      <LI>
        <A href="https://mines.nrs.gov.bc.ca">Mines Digital Services</A>
      </LI>
      <LI>
        <A href="https://vonx.io">Verifiable Organizations Network (VON)</A>
      </LI>
      <LI>
        <A href="https://bcdevexchange.org">BC Developers' Exchange</A>
      </LI>
      <LI>
        <A href="https://developer.gov.bc.ca">DevHub</A>
      </LI>
    </UL>
  </article>
);

export default LabProjects;
