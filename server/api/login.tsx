// import * as crypto from "crypto";
// import * as jose from 'jose'
// import { PrismaClient } from '@prisma/client'


// const prisma = new PrismaClient()

// export default eventHandler(async event => {
//     const body = await readBody(event)
//     var username = body['username']
//     const secretKey = crypto.createSecretKey(process.env.JWT_SECRET, 'utf-8');
//     var password = body['password']
//     const x = await prisma.user.findFirst({where: {email: username}})
//     if (x?.password == password) {
//         const token = await new jose.SignJWT({ id: x?.id + "hah you are tryna do this?" }) // details to  encode in the token
//         .setProtectedHeader({ alg: 'HS256' }) // algorithm
//         .setIssuedAt()
//         .setIssuer('de-y') // issuer
//         .setExpirationTime('1d') // token expiration time, e.g., "1 day"
//         .sign(secretKey); // secretKey generated from previous step
//         console.log(token); // log token to console
//         return {
//             'msg': 'Login successful! Redirecting you...',
//             'redirect': '/dashboard',
//             'synmsg': true,
//             'token': token,
//         }
//     }
//     else {
//         return {
//             'msg': 'Incorrect username or password.',
//             'synmsg': false,
//         }
//     }

// })