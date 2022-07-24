import accepts from '@fastify/accepts';
import caching from '@fastify/caching';
import compress from '@fastify/compress';
import cors from '@fastify/cors';
import Etag from '@fastify/etag';
import pg from '@fastify/postgres';
import redis from '@fastify/redis';
import pressure from '@fastify/under-pressure';
import fp from 'fastify-plugin';
import type { Redis } from 'ioredis';
import IORedis from 'ioredis';
interface RedisOptions {
  redis: Redis;
  postgres: string;
}

export const autoConfig: RedisOptions = {
  redis: new IORedis(),
  postgres: 'postgres://postgres:postgres@localhost:5432/postgres'
}

const underPressureConfig = {
  maxEventLoopDelay: 1000,
  exposeStatusRoute: {
    routeOpts: {
      logLevel: 'info',
    },
    url: '/healthcheck'
  }
}

/**
 * This plugins adds fastify core plugins
 *
 */
export default fp<RedisOptions>(async (fastify, opts) => {
  const abcache = require('abstract-cache')({
    useAwait: false,
    driver: {
      name: 'abstract-cache-redis', // must be installed via `npm install`
      options: { client: opts.redis }
    }
  })


  fastify
    .register(accepts)
    .register(Etag)
    .register(cors)
    .register(pressure, underPressureConfig)
    .register(redis, { client: opts.redis })
    .register(caching, { cache: abcache })
    .register(compress, { global: true })
    .register(pg, { connectionString: opts.postgres, native: true })
})