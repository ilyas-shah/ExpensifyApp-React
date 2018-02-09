// entry -> output
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map': 'inline-source-map', // DEV TOOLS SOURCE PACK FROM WEBPACK, IT EXACTLY SHOWS THE POSITION OF THE ERROR IN A BABEK ENV(IN ES6 FILE NOT IN ES5)
        devServer: {
            historyApiFallback: true , // for client side routing
            contentBase: path.join(__dirname, 'public') // IT IS MUCH FASTER AS IT CREATES A COPY OF THE CODE IT WILL SERVE
        }
    }
}