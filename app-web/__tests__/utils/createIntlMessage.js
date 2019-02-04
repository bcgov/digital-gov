import React from 'react';
import { FormattedMessage } from 'react-intl';
import createIntlMessage from '../../src/utils/createIntlMessage';

describe('createIntlMessage', () => {
  it('returns an object with id, message, and description fields', () => {
    const expected = {
      id: 'foo',
      message: 'bar',
      description: 'baz',
    };

    expected(createIntlMessage('foo', 'bar', 'baz')).toEqual(expected);
  });
});