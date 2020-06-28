/**
 * 例子打包配置文件
 * @author djh
 * @date 2020-5-11
 */

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpackDemo = {
  mode: "development",
  entry: {
    app: "./examples/main.js",
  },
  output: {
    path: path.resolve(process.cwd(), "./examples/bge-ui"),
    filename: "[name].[hash:7].js",
    chunkFilename: "[name].js", // 单独打包的文件 分包
  },
  resolve: {
    extensions: [".js", ".vue", ".json"], // 解析文件顺序
  },
  performance: {
    // 性能监控提示
    hints: false,
  },
  stats: {
    // 信息统计
    children: false,
  },
  devServer: {
    // 代理服务
    host: "127.0.0.1",
    port: 8085,
    publicPath: "/",
    open: true,
    hot: true, // 开启热更新
    inline: true,
    clientLogLevel: "none",
  },

  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(), // 指令目录
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        use: [
          "cache-loader",
          "thread-loader",
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
          {
            loader: path.resolve(__dirname, "./md-loader/index.js"),
          },
        ],
      },
      {
        test: /\.(less|css)$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "img/[name].[hash:8].[ext]",
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4096,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "media/[name].[hash:8].[ext]",
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4096,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "fonts/[name].[hash:8].[ext]",
                },
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        elementUI: {
          name: "chunk-elementUI", // 单独将 elementUI 拆包
          priority: 15, // 权重需大于其它缓存组
          test: /[\/]node_modules[\/]element-ui[\/]/,
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
      },
    }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./examples/index.html",
      filename: "./index.html",
      inject: true,
      // favicon: resolve('favicon.ico'),
      title: "demo",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
  devtool: "#eval-source-map",
};

module.exports = webpackDemo;
