import 'reflect-metadata'
import { resolvers } from '@generated/type-graphql'
import { ApolloServer } from 'apollo-server'
import chalk from 'chalk'
import * as tq from 'type-graphql'
import { context } from './context'

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers,
  })

  const server = new ApolloServer({ context, schema })

  server.listen({ port: process.env.API_PORT }).then(({ url }) => {
    console.log(chalk.green(`==== 🚀 Server ready ====`))
    console.log(
      `
GraphQL API : ${chalk.blueBright(`${url}graphql`)}
Health check: ${chalk.blueBright(`${url}.well-known/apollo/server-health`)}
    `.trim()
    )
  })
}

app()
