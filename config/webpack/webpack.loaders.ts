import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './webpack.types';

const webpackLoaders = (buildOptions: BuildOptions) => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
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

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      buildOptions.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (path: string) => !!path.includes('.module.'),
            localIdentName: buildOptions.isDev ? '[name]__[local]-[hash:base64:2]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [
    tsLoader,
    fileLoader,
    svgLoader,
    cssLoader,
  ]
};

export default webpackLoaders;
