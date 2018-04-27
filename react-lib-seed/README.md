# React Component Library with SCSS

We need to enable scss in the library like this in the webpack.config.dev.js and the webpack.config.prod.js files.

To get these files, run npm run eject.

## scss stylesheets
CSS GLOBAL SCOPE (bootstrap, kendo ui...)
```javascript
{
    test: /\.css$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader')
      },
    ]
}
```
CSS LOCAL SCOPE (module enabled)
```javascript
{
  test: /\.scss$/,
  use: [{
      loader: "style-loader"
  }, {
      loader: "css-loader",
      options: {
        modules: true,
        sourceMap: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]___[hash:base64:5]'
    }
  }, {
      loader: "sass-loader",
      options: {
        includePaths: ["public/css/"]
    }
  }]
},
{
  exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.sass$/, /\.scss$/,],
  loader: require.resolve('file-loader'),
  options: {
    name: 'static/media/[name].[hash:8].[ext]',
  },
}
```
## CSS Modular

Read more how to use and best practice
https://github.com/gajus/react-css-modules#decorator

In short:
when namespacing css, to avoid problem only use class not id
in jsx use style name for encapsulated css, className for global css
if use multi class need to enable allowMulti = true in third parameter of CSSMODULE function
  => CSSModules(SlideoutMenu, styles, { allowMultiple: true });


## Naming Convention
https://hackernoon.com/react-components-naming-convention-%EF%B8%8F-b50303551505


