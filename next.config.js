/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// const { nextI18NextRewrites } = require('next-i18next/rewrites');

const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n,
  // rewrites: async () => nextI18NextRewrites(localeSubpaths),
  webpack(config, options) {
    if (!options.isServer && config.mode === 'development') {
      const { I18NextHMRPlugin } = require('i18next-hmr/plugin');
      config.plugins.push(
        new I18NextHMRPlugin({
          localesDir: path.resolve(__dirname, 'public/locales'),
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
