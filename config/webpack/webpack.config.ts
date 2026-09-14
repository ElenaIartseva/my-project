import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './webpack.types';
import webpackLoaders from './webpack.loaders';
import webpackPlugins from './webpack.plugins';
import webpackAlias from './webpack.alias';

interface Configuration extends WebpackConfiguration {
  devServer: WebpackDevServerConfiguration
}

const webpackConfig = (buildOptions: BuildOptions): Configuration => ({
  devServer: {
    port: buildOptions.port,
    historyApiFallback: true,
    open: true,
    hot: true,
    static: {
      directory: buildOptions.paths.public,
    },
    client: {
      overlay: false,
    },
  },
  devtool: buildOptions.isDev ? 'inline-source-map' : false,
  mode: buildOptions.mode,
  entry: buildOptions.paths.entry,
  output: {
    filename: '[name].[contenthash].js',
    path: buildOptions.paths.build,
    clean: true,
  },
  plugins: webpackPlugins(buildOptions),
  module: {
    rules: webpackLoaders(buildOptions),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: webpackAlias(buildOptions),
  },
});

export default webpackConfig;
