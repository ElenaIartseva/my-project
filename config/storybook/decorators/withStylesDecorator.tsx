import '@styles/index.scss';
import { Decorator } from '@storybook/react';

const withStylesDecorator: Decorator = (Story) => (
  <div style={{ display: 'inline-flex', alignItems: 'flex-start', padding: '2rem' }}>
    <Story />
  </div>
);

export default withStylesDecorator;
