// entry -> output
const path = require('path')
module.exports = {
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // webpack tool to use babel inside a webpack
    // it starts by setting a 'rule', here the rule is 
    // look for files that ends at '.js' and run them
    // using babel, also a rule to 'exclude' some files
    // like node modules.
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map', // DEV TOOLS SOURCE PACK FROM WEBPACK, IT EXACTLY SHOWS THE POSITION OF THE ERROR IN A BABEK ENV(IN ES6 FILE NOT IN ES5)
    devServer: {
        historyApiFallback: true , // for client side routing
        contentBase: path.join(__dirname, 'public') // IT IS MUCH FASTER AS IT CREATES A COPY OF THE CODE IT WILL SERVE
    }
};