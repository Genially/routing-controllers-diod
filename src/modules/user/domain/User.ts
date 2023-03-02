export class User {
	static newUser(email: string, password: string) {
		return new User(email, password, new Date());
	}

	constructor(
		public readonly email: string,
		public readonly password: string,
		public readonly createdAt: Date
	) { }
}