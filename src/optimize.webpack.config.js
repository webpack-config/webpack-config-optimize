import partial from 'webpack-partial';
import {optimize} from 'webpack';

export default () => (config) => partial(config, {
  plugins: [
    new optimize.DedupePlugin(),
    new optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});
