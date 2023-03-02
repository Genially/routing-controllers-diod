import { Service } from 'diod';
import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

@Service()
export class SignUpService {
	constructor(private readonly repository: UserRepository) { }

	execute(email: string, password: string): Promise<void> {
		const user = User.newUser(email, password);
		return this.repository.save(user);
	}
}