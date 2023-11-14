import * as crypto from "crypto";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function register(username: string, passwordl: string, email: string) {
    var x = await prisma.user.create({
        data: {
            name: username,
            email: email,
            password: passwordl,
        }
    })
    console.log(x)
}
export default eventHandler(async event => {
    const body = await readBody(event)
    var username = body['username']
    var email = body['email']
    var password = body['password']
    register(username, password, email)
    return {
        'msg': 'Done.',
        'synmsg': true,
    }
})