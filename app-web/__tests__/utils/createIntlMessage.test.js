import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';
import createIntlMessage from '../../src/utils/createIntlMessage';

jest.mock('shortid', () => {
  return {
    generate: jest.fn(() => '1'),
  };
});

describe('createIntlMessage', () => {
  it('returns an object with id, message, and description fields', () => {
    const expected = {
      id: 'foo',
      defaultMessage: 'bar',
      description: 'baz',
      values: {},
    };

    expect(createIntlMessage('foo', 'bar', 'baz')).toEqual(expected);
  });

  it('generates an id when passed null for an id', () => {
    const expected = {
      id: '1',
      defaultMessage: 'bar',
      description: 'baz',
      values: {},
    };

    expect(createIntlMessage(null, 'bar', 'baz')).toEqual(expected);
  });

  it('spreads works with formatted message', () => {
    const wrapper = shallow(
      <FormattedMessage {...createIntlMessage('matt', 'damon', '=awesome')} />,
    );

    expect(wrapper);
  });
});
