module.exports = {
  client: {
    service: {
      name: 'dev',
      url: 'http://localhost:4000/graphql',
      skipSSLValidation: true,
    },
    includes: ['./src/**/*.gql'],
  }
}