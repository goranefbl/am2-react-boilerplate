const HTMLWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HTMLWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        htmlPlugin,
    ],
    devtool: 'cheap-module-eval-source-map'
}
