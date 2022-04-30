const withTM = require('next-transpile-modules')(['ui-react', 'gql-schema'])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
})
