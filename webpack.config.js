const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx|json)$/,
               
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {}
            }
        ]
             },
             {
                files: ['**/*.ts?(x)'], 
                parser: '@typescript-eslint/parser', 
             }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            "template": "./public/index.html",
            "filename": "./index.html"
        })
    ]
    
};