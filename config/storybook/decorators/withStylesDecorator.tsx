import '@styles/index.scss';
import { Decorator } from '@storybook/react';

const withStylesDecorator: Decorator = (Story) => (
  <div>
    <Story />
  </div>
);

export default withStylesDecorator;
