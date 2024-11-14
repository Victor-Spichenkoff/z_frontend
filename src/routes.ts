/**
 * Rotas que devem ficar acessível a todos
 * @type { string[] }
 */
export const publicRoutes = []// livre para o user


/**
* Rotas que são usadas para fazer login e outros
* Se o usuário0 tentar os acessar, será redirecionado para /settings
* @type { string[] }
*/
export const authRoutes = [
    'signin',
    'signup'
]




/**
* Para onde mandas após fazer o login e tentar acessar as paginas de auth
* @type { string }
*/
export const DEFAULT_LOGIN_REDIRECT = '/signup'