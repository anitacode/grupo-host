require('dotenv').config(); 
const webpack = require('webpack');
const mix = require('laravel-mix');

let dotenvplugin = new webpack.DefinePlugin({
    'process.env': {
        APP_ENV: JSON.stringify(process.env.APP_ENV)
    }
})


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 class Loaders {
    webpackRules() {
        return {
            rules: [
                {
                    test: /\.s(a|c)ss$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.html$/,
                    use: ["html-loader"]
                },
                {
                    test: /\.(mp4|svg|png|jpe?g|gif)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                        name: "[name].[hash].[ext]"
                        }
                    }
                }
            ]
        }
    }
}
mix.browserSync('http://127.0.0.1:8000');
mix.extend('loaders', new Loaders());
mix.webpackConfig({ 
    stats: { children: true, }, 
    plugins: [
        dotenvplugin,
    ]
});
mix.js('resources/js/app.js', 'public/js')
mix.loaders();