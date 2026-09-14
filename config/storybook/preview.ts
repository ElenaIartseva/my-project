import type { Preview } from '@storybook/react';
import withStylesDecorator from '@config/storybook/decorators/withStylesDecorator';
import withThemeDecorator from '@config/storybook/decorators/withThemeDecorator';
import withRouteDecorator from '@config/storybook/decorators/withRouteDecorator';
import { Theme } from '@context/ThemeContext';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: Theme.LIGHT,
      toolbar: {
        items: [
          {
            value: Theme.LIGHT,
            title: Theme.LIGHT,
            icon: 'sun',
          },
          {
            value: Theme.DARK,
            title: Theme.DARK,
            icon: 'moon',
          },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    withStylesDecorator,
    withThemeDecorator,
    withRouteDecorator,
  ],
};

export default preview;
