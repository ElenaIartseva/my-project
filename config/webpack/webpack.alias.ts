import { BuildOptions } from './webpack.types';

const webpackAlias = (options: BuildOptions): Record<string, string> => {
  const { alias } = options;

  return {
    '@assets': alias.assets,
    '@config': alias.config,
    '@components': alias.components,
    '@context': alias.context,
    '@pages': alias.pages,
    '@styles': alias.styles,
    '@utils': alias.utils,
    '@constants': alias.constants,
    '@hooks': alias.hooks,
  }
};

export default webpackAlias;
