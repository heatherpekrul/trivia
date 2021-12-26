module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        debug: false,
        corejs: {
          version: 3.4,
          proposals: true,
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining'
  ],
};