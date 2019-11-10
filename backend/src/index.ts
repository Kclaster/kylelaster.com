import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './db'
import { Context } from './utils'

const resolvers = {
  Query: {
    feed(parent, args, context: Context) {
      return context.prisma.posts({ where: { published: true } })
    },
    drafts(parent, args, context: Context) {
      return context.prisma.posts({ where: { published: false } })
    },
    post(parent, { id }, context: Context) {
      return context.prisma.post({ id })
    },
  },
  Mutation: {
    createDraft(parent, { title, content, language }, context: Context) {
      return context.prisma.createPost({ title, content, language })
    },
    deletePost(parent, { id }, context: Context) {
      return context.prisma.deletePost({ id })
    },
    publish(parent, { id }, context: Context) {
      return context.prisma.updatePost({
        where: { id },
        data: { published: true },
      })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
})
server.start(() => console.log('Server is running on http://localhost:4000'))
