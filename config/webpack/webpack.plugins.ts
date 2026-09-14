import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { BuildOptions } from './webpack.types';

const webpackPlugins = (buildOptions: BuildOptions) => [
  new HtmlWebpackPlugin({
    template: buildOptions.paths.html,
  }),
  new webpack.ProgressPlugin(),
  new webpack.DefinePlugin({
    _GLOBAL_IS_DEV_: JSON.stringify(buildOptions.isDev),
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: buildOptions.paths.public,
        to: buildOptions.paths.build,
        globOptions: {
          ignore: ['**/index.html'],
        },
      },
    ],
  }),
  new MiniCssExtractPlugin(),
];

export default webpackPlugins;
