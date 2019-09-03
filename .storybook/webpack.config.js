module.exports = ({config}) => {
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
    // config.module.rules.push({
    //     test: /\.story\.tsx?$/,
    //     loaders: [
    //         {
    //             loader: require.resolve('@storybook/addon-storysource/loader'),
    //             options: {parser: 'typescript'},
    //         },
    //         {
    //             loader: 'babel-loader',
    //             options: {
    //                 presets: ["@babel/env", "@babel/flow", "@babel/react",],
    //                 plugins: ["react-docgen", "@babel/plugin-proposal-class-properties"]
    //             }
    //         }
    //     ],
    //     enforce: 'pre',
    // });
    config.module.rules.unshift({
        test: /\.story\.tsx?$/,
        loaders: [
            {
                loader: require.resolve("@storybook/addon-storysource/loader"),
                options: {
                    prettierConfig: {
                        tabWidth: 4,
                        trailingComma: "es5",
                    },
                },
            },
        ],
        enforce: "pre",
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
