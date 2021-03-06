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
import shortid from 'shortid';
import { FormattedMessage } from 'react-intl';
import { HOMEPAGE_CONTENT } from './content';
import styled from '@emotion/styled';

const LI = styled.li`
  padding: 5px;
`;

const SidePanel = () => (
  <aside>
    <h2
      css={{
        fontSize: '1.5em',
        borderBottom: '3px solid #f4c200',
        paddingBottom: 5,
        textAlign: 'center',
      }}
    >
      <FormattedMessage {...HOMEPAGE_CONTENT.SIDE.title} />
    </h2>
    <ol css={{ fontSize: '1.15em' }}>
      {HOMEPAGE_CONTENT.SIDE.list.map(l => {
        return (
          <LI key={shortid.generate()}>
            <FormattedMessage {...l} />
          </LI>
        );
      })}
    </ol>
  </aside>
);

export default SidePanel;
