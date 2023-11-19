import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Alert from './Alert';

import { AlertContainer } from './style';

describe('Alert unit tests', () => {
  it('renders as expected', () => {
    const result = renderer.create(<Alert />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
