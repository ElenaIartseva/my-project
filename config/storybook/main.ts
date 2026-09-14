import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (webpackConfig) => {
    const cssLoader = {
      test: /\.s?css$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (filePath: string) => !!filePath.includes('.module.'),
              localIdentName: '[name]__[local]-[hash:base64:2]',
            },
          },
        },
        'sass-loader',
      ],
    };

    const fileLoader = {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    };

    const svgLoader = {
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    };

    const resolve = {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@assets': path.resolve(__dirname, '../../src/assets/'),
        '@config': path.resolve(__dirname, '../'),
        '@components': path.resolve(__dirname, '../../src/components/'),
        '@context': path.resolve(__dirname, '../../src/context/'),
        '@pages': path.resolve(__dirname, '../../src/pages/'),
        '@styles': path.resolve(__dirname, '../../src/styles/'),
        '@utils': path.resolve(__dirname, '../../src/utils/'),
        '@constants': path.resolve(__dirname, '../../src/utils/constants/'),
        '@hooks': path.resolve(__dirname, '../../src/utils/hooks/'),
      },
    };

    return {
      ...webpackConfig,
      module: {
        ...webpackConfig.module,
        rules: [
          ...webpackConfig.module?.rules ?? [],
          cssLoader,
          fileLoader,
          svgLoader,
        ],
      },
      resolve: {
        ...webpackConfig.resolve,
        ...resolve,
      },
    };
  },
};

export default config;
