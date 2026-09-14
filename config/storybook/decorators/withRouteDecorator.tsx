import { Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const withRouteDecorator: Decorator = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

export default withRouteDecorator;
