export enum BuildModes {
  development = 'development',
  production = 'production',
}

export type BuildOptions = {
  mode: keyof typeof BuildModes
  port: number
  isDev: boolean
  paths: {
    entry: string,
    build: string,
    html: string,
    public: string,
  }
  alias: {
    assets: string
    config: string
    components: string
    context: string
    pages: string
    styles: string
    utils: string
    constants: string
    hooks: string
  }
};

export type BuildEnv = {
  mode: keyof typeof BuildModes,
  port: string
};
