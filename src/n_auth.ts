// import NextAuth, { type DefaultSession } from "next-auth"
// import authConfig from "./auth.config"


// // import { getUserById } from "./data/user"




// //handlers == { GET, POST }
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   pages: {
//     signIn: '/auth/login',
//     error: '/auth/error'
//   },

//   callbacks: {
//     async session({ token, session }) {
//       //não tem o id por padrão
//     //   if(token.sub && session.user) {
//     //     session.user.id = token.sub
//     //   }

//       return session
//     },
//     async jwt({ token }) {
//       return token
//     },
//     async signIn({ user }) {//no mesmo estilo do nosso db (mais ou menos coisa dependendo do provider)
//       //true == pode entrar; false == negado
      
//     //   const existingUser = await getUserById(String(user.id))
//       const existingUser = false
       
//       if(!existingUser) return false


//       return true//pode entrar
//     }
//   },
//   session: { strategy: 'jwt' },//para conseguir usar o db
//   ...authConfig
// })




// //DELE
// // export const {
// //     handlers: { GET, POST },
// //     auth
// // } = NextAuth({
// //     providers: [GitHub]
// // })