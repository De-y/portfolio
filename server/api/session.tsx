// import * as jose from 'jose'
// import * as crypto from 'crypto'
// export default eventHandler(async event => {
//     try {
//         const body = await readBody(event)
//         const token = (body['authentication'])
//         var l = await jose.jwtVerify(token,crypto.createSecretKey(process.env.JWT_SECRET, 'utf-8'))
//         console.log(l)
//         return {
//             'signv': true
//         }
//     } catch (error) {
//         return {
//             'msg': 'Invalid token.',
//             'signv': false
//         }
//     }
// })