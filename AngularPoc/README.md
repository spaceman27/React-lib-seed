# Angular App with React Component Demo

## Import ReactJS components into Angular2+ Application

- Generate a new Angular app using the Angular CLI with ng new.
- Install the following npm packages
  - babel-loader (--save-dev)
  - babel-core  (--save-dev)
  - babel-preset-react  (--save-dev)
  - babel-eslint (--save-dev)
  - babel-preset-es2015 (--save-dev)
  - react  (--save)
  - react-dom  (--save)
  - eslint (--save-dev)
  - eslint-loader (--save-dev)
  - eslint-config-react-app (--save-dev)
  - eslint-plugin-import (--save-dev)
  - eslint-plugin-flowtype (--save-dev)
  - eslint-jsx-a11y (--save-dev)
  - eslint-plugin-flowtype (--save-dev)
  - eslint-plugin-react (--save-dev)
- Eject webpack using ng eject.
  - This means ng serve and ng build no longer works, but that's ok because npm run build and npm start works.
- Modify webpack.config.js file to include the following.
  - There will be many more rules and properties in the module than this, but the path is shown for clarity.

```javascript
const env = process.env.ENV = process.env.NODE_ENV = 'development';
...
"module": {
  "rules": [
    {
      "test": /\.jsx$/,
      "exclude": /(node_modules|bower_components)/,
      "loader": "babel-loader",
      "query": {
        "presets":['react']
      }
    }
  ]
}
```

- Add "allowJs": true to the tsconfig.json file.
- Now your angular app can import ReactJS components.

## Demo Code

Must add 

```javascript
encapsulation: ViewEncapsulation.none;
```

to any component that wraps an angular component.

We also need to import the scss files into the component style as shown in src/app/navigation-bar/navigation-bar.component.scss.

See the component src/app/navigation-bar for details on how to use the react component in your angular application.
