module.exports = {
  publicPath: '/',
  filenameHashing: false,
  runtimeCompiler: true,

  chainWebpack: (config) => {
    config.plugins.delete('html');
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
    config.output.filename('js/app.js');
    config.output.chunkFilename('js/[name].js');
  },

  css: {
    extract: {
      filename: 'css/app.css',
      chunkFilename: 'css/[name].css',
    },
    loaderOptions: {
      scss: {
        additionalData: `@import '~/client/styles/settings/index.scss';`,
      },
    },
  },

  configureWebpack: () => {
    const customConfig = {
      resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
      },
      optimization: {
        splitChunks: false,
      },
      entry: {
        app: './client/main.js',
      },
      plugins: [],
    };

    return customConfig;
  },
};