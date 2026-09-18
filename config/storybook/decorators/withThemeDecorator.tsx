import ThemeProvider from '@context/ThemeProvider';
import { Decorator } from '@storybook/react';
import { Theme } from '@context/ThemeContext';

const withThemeDecorator: Decorator = (Story, context) => (
  <ThemeProvider initialTheme={context?.globals?.theme || Theme.LIGHT}>
    <div
      className={`app ${context?.globals?.theme || Theme.LIGHT}`}
      style={{ minHeight: 'auto' }}
    >
      <Story />
    </div>
  </ThemeProvider>
);

export default withThemeDecorator;
