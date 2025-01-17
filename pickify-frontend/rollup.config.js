import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'sidepanel/capture.js',
    output: {
      file: 'dist/capture.bundle.js',
      format: 'iife',
    },
    plugins: [resolve(), commonjs()],
  },
  {
    input: 'sidepanel/clickTabs.js',
    output: {
      file: 'dist/clickTabs.bundle.js',
      format: 'iife',
    },
    plugins: [resolve(), commonjs()],
  },
];
