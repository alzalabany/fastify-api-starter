import jwt from '@fastify/jwt';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import * as configuration from '../Env';

export interface jwtPluginOptions {
  // Specify Support plugin options here
  private: string,
  public: string,
}

export const autoConfig: jwtPluginOptions = { public: configuration.PUBLIC_KEY, private: 'N/A' };


async function jwtPlugin(fastify: FastifyInstance, opts: jwtPluginOptions) {
  fastify.register(jwt, {
    secret: {
      private: opts.private,
      public: opts.public,
    }
  })

  fastify.decorate("authenticate", async function (request: FastifyRequest, reply: FastifyReply) {
    fastify.log.debug("validate jwt");
    try {
      await request.jwtVerify()
      fastify.log.debug("success jwt");
    } catch (err) {
      fastify.log.debug("jwt failed");
      reply.send(err)
    }
  })

}

export default fp<jwtPluginOptions>(jwtPlugin);

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate: any
  }
}
