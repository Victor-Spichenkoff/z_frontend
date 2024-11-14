export interface AuthUSer {
	token: string,
	user: {
		name: string
		slug: string
		avatar: string
	}
}