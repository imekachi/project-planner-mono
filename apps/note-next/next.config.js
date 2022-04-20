const withTM = require('next-transpile-modules')(['ui', 'gql-schema'])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
})
