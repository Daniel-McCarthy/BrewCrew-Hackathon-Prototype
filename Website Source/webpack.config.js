var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = (env, arg) => {
    return {
        entry: "./src/index.js",
        mode: arg,
        output: {
            filename: "bundle.js",
            path:  __dirname + "/../docs"
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
            })
        ],
        watch: true,
        watchOptions: {
            aggregateTimeout: 200,
            poll: 1000
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(js|jsx)$/,
                    loaders: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            {
                                'plugins': ['@babel/plugin-proposal-class-properties']
                            }
                        ]
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                        loader: 'file-loader',
                        },
                    ],
                }
            ]
        },

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    }
};