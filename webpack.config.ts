import path from 'path';
import webpackConfig from './config/webpack/webpack.config';
import { BuildEnv, BuildModes, BuildOptions } from './config/webpack/webpack.types';

export default (env: BuildEnv) => {
  const mode = env.mode || BuildModes.development;

  const port = Number(env.port) || 3000;

  const isDev = mode === BuildModes.development;

  const buildOptions: BuildOptions = {
    mode,
    port,
    isDev,
    paths: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public/index.html'),
      public: path.resolve(__dirname, 'public'),
    },
    alias: {
      assets: path.resolve(__dirname, './src/assets/'),
      config: path.resolve(__dirname, './config/'),
      components: path.resolve(__dirname, './src/components/'),
      context: path.resolve(__dirname, './src/context/'),
      pages: path.resolve(__dirname, './src/pages/'),
      styles: path.resolve(__dirname, './src/styles/'),
      utils: path.resolve(__dirname, './src/utils/'),
      constants: path.resolve(__dirname, './src/utils/constants/'),
      hooks: path.resolve(__dirname, './src/utils/hooks/'),
    },
  };

  return webpackConfig(buildOptions);
};
