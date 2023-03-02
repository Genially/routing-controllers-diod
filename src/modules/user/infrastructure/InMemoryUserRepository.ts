import { Service } from 'diod';
import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

const users: User[] = [];

@Service()
export class InMemoryUserRepository extends UserRepository {
	async save(user: User): Promise<void> {
		users.push(user);
		console.log(`${user.email} has been saved! Total: ${users.length}`);
	}
}