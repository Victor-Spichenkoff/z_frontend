// import NextAuth from "next-auth"

// import authConfig from "./auth.config"

// const { auth } = NextAuth(authConfig)
// //⬆️ adaptações para usar prisma (sem suporte a edge)

// import { 
//     DEFAULT_LOGIN_REDIRECT,
//     publicRoutes,
//     authRoutes
// } from '@/routes'

// export default auth((req: any) => {
//     const { nextUrl } = req
//     const isLoggedIn = !!req.auth

//     //verifica se é uma das rotas de verificação (nossa api)
//     const isPublicRoute = publicRoutes.includes(nextUrl.pathname as never)//erro aqui
//     const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    
//     if(isAuthRoute) {
//         //já logado, só repassa para as settings
//         if (isLoggedIn) {
//             //nextUrl cria uma url abosoluta
//             return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
//         }

//         return undefined
//     }


//     //sem logar e em rota privada
//     if(!isLoggedIn && !isPublicRoute) {
//         let callbackUrl = nextUrl.pathname
//         callbackUrl += nextUrl.search


//         return Response.redirect(new URL(`/signup`,
//             nextUrl))
//     }

//     //permite qualquer uma
//     return undefined
// })

    
    
// //configurar quais rotas evocarão a função exportada a cima (sempre que acessar essas, ele chama a função)
// export const config = {
//     //todas, menos coisas estaticas (imgs, coisas do next...)
//     matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// }



// //documentação, mas esse dá problema com o middleware
// // export { auth as middleware } from "@/auth"
