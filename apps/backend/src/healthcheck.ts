import dotenv from 'dotenv'
import fetch from 'node-fetch'

dotenv.config()

const main = async () => {
  const url = `http://localhost:${process.env.API_PORT}/.well-known/apollo/server-health`

  const isSuccess = await healthCheck(url)

  if (isSuccess) {
    console.log('> The server is healthy!')
    process.exit(0)
  } else {
    console.error('> Somethings wrong with the server.')
    process.exit(1)
  }
}

main()

type HealthCheckOptions = {
  retries?: number
  delayRetryMs?: number
}

async function healthCheck(url: string, options: HealthCheckOptions = {}) {
  console.log(`> Checking API health at ${url}`)

  const { retries = 8, delayRetryMs = 3000 } = options

  let tries = retries
  let isSuccess = false

  while (tries > 0 && !isSuccess) {
    if (tries < retries) {
      console.warn(`> Retrying...`)
    }
    try {
      const response = await fetch(url)
      if (response.status === 200) {
        isSuccess = true
      } else {
        throw new Error('Response status is not 200')
      }
    } catch {
      tries -= 1
      await delayFor(delayRetryMs)
    }
  }

  return isSuccess
}

function delayFor(ms: number) {
  return new Promise((rs) => setTimeout(rs, ms))
}
