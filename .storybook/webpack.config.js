module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ["@babel/env", "@babel/flow", "@babel/react",],
        plugins: ["react-docgen", "@babel/plugin-proposal-class-properties"]
      }
    }
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
