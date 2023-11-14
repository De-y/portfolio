import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const getPosts = async () => {
    const posts = await prisma.posts.findMany()
    return posts
}

export default eventHandler(event => {
    const postData = getPosts()
    return {
        'posts': postData
    }
})