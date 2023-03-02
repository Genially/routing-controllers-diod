import { BodyParam, JsonController, Post } from 'routing-controllers';
import { SignUpService } from '../../../../modules/user/application/SignUpService';

@JsonController()
export class SignUpController {
	constructor(private readonly service: SignUpService) { }

	@Post('/users')
	async signUp(
		@BodyParam('email') email: string,
		@BodyParam('password') password: string
	) {
		await this.service.execute(email, password);

		return 'User created';
	}
}
