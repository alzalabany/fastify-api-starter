import sensible, { SensibleOptions } from '@fastify/sensible';
import fp from 'fastify-plugin';

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<SensibleOptions>(async (fastify, opts) => {
  fastify.register(sensible, {
    errorHandler: false
  })
})

declare module 'fastify' {
  export interface FastifyInstance {
    someSupport2(): string;
  }
}
