import { FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', {
    onRequest: [fastify.authenticate]
  }, async function (request, reply) {
    return { root: request.user }
  })
}

export default root;
