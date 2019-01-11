const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const webpack = require('webpack');
// const miniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// const CompressionPlugin = require("compression-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function getWebConfig(project, mode) {
  console.log("project", project);
  return {
    entry: {
      style: `./app/src/styles.styl`,
      app: `./app/src/index.js`,
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    mode,
    // devtool: "inline-source-map",
    /* resolve: {
      extensions: [".ts", ".tsx", ".js", ".json", ".styl"],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: `./tsconfig.json`
        })
      ]
    },*/
    module: {
      rules: [
        /*         {
                  test: /\.tsx?$/,
                  exclude: /(node_modules|__tests__)/,
                  loader: "ts-loader"
                }, */
        /*         {
                  enforce: "pre",
                  test: /\.js$/,
                  exclude: /node_modules/,
                  loader: "source-map-loader"
                }, */
        {
          test: /\.styl$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [{
                loader: "style-loader"
              },
              {
                loader: "css-loader"
              },
              {
                loader: "stylus-loader"
              },
              {
                loader: "required-loader"
              }
            ]
          })

        },
        /*  {
           test: /\.json$/,
           loader: 'json-loader'
         },
         {
           test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
           use: "url-loader"
         },
         {
           test: /\.(ttf|eot|svg|gif|png|jpg|jpeg|ico|mp4)(\?[\s\S]+)?$/,
           use: 'file-loader'
         }, */
      ]
    },
    /* devServer: {
      contentBase: path.resolve("./../dist/"),
      compress: true,
      port: 3001,
      host: "0.0.0.0",
      overlay: true,
      disableHostCheck: true,
      open: true,
      historyApiFallback: true,
      before(app) {
        app.get("/", function (req, res) {
          res.redirect("/app/");
        });
      },
      watchOptions: {
        poll: undefined,
        aggregateTimeout: 300,
        ignored: /(node_modules|img)/,
      },
      // proxy: {
      //     '/#': {
      //         target: 'http://192.168.5.196/v1/login',
      //         changeOrigin: true,
      //         secure: false
      //     }
      // },
      // headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials": "true"}
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }, */
    plugins: [
      new ExtractTextPlugin("styles.css"),
    ]
    /* plugins: [
      new HtmlWebpackPlugin({
        title: "Pokemon API | Dimtry PacificAtion",
        template: path.resolve(__dirname, "../", "index.ejs"),
        favicon: path.resolve(__dirname, "../", "favicon.ico"),
        allChunks: true,
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer',
      }),
      new webpack.ProgressPlugin(
        (percentage, msg, moduleProgress, activeModules, moduleName) => {
          let path = msg;
          if (moduleName) {
            path = moduleName.split("!");
            path = path[path.length - 1].split("ui-app")[1];
          }
          console.info("Progress: ", parseInt(percentage * 100, 10) + "%", path);
        }
      ),
      new BundleAnalyzerPlugin(),
    ] */
  }
};

module.exports = getWebConfig("dev", "development");