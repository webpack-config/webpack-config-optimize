# webpack-config-optimize

Minify generated [webpack] code for production builds.

![build status](http://img.shields.io/travis/webpack-config/webpack-config-optimize/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/webpack-config/webpack-config-optimize/master.svg?style=flat)
![license](http://img.shields.io/npm/l/webpack-config-optimize.svg?style=flat)
![version](http://img.shields.io/npm/v/webpack-config-optimize.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/webpack-config-optimize.svg?style=flat)

## Usage

Install:

```sh
npm install --save webpack-config-optimize
```

Add to your `webpack.config.babel.js`:

```javascript
import optimize from `webpack-config-optimize`;

optimize()({
  /* existing webpack configuration */
})
```

[webpack]: https://webpack.github.io
