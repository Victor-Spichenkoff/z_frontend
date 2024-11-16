// import Credentials from 'next-auth/providers/credentials'

// // import type { NextAuthConfig } from 'next-auth'
// import { api } from './libs/api'

// export default {
//     providers: [
//         Credentials({
//             credentials: {
//                 email: { label: "E-mail", type: "text" },
//                 password: { label: "Senha", type: "password" },
//             },

//             async authorize(credentials) {
//                 try {
//                     const loggedUser = await api.post("/auth/signin", {
//                         email: credentials?.email,
//                         password: credentials?.password
//                     })

//                     return loggedUser as any//tudo certo
//                 } catch {
//                     return null
//                 }
//             }
//         })
//     ]
// }// satisfies NextAuthConfig