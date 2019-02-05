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
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '../UI/Link/Link';
import { EXTERNAL, MAILTOS } from '../../constants/routes';

const StyledLinkComponent = styled(Link)`
  font-size: 1.5em;
  text-decoration: none;
  color: #444;
  margin: 0 10px;
`;

const ConnectWithUs = () => (
  <section css={{ textAlign: 'center' }}>
    <h3>Connect With Us</h3>
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <StyledLinkComponent to={EXTERNAL.LINKED_IN_PROFILE}>
        <FontAwesomeIcon icon={faLinkedin} />
      </StyledLinkComponent>
      <StyledLinkComponent to={MAILTOS.CSILAB}>
        <FontAwesomeIcon icon={faEnvelope} />
      </StyledLinkComponent>
    </div>
  </section>
);

export default ConnectWithUs;
