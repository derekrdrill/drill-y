import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ActionButton from './ActionButton';

describe('ActionButton unit tests', () => {
  it('renders as expected', () => {
    const result = renderer.create(<ActionButton />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
