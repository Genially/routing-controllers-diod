import 'reflect-metadata';

import { ContainerBuilder } from 'diod';
import { createExpressServer, useContainer } from 'routing-controllers';
import { SignUpService } from '../modules/user/application/SignUpService';
import { UserRepository } from '../modules/user/domain/UserRepository';
import { InMemoryUserRepository } from '../modules/user/infrastructure/InMemoryUserRepository';
import { SignUpController } from './controllers/users/post/SignUpController';

const baseDir = __dirname;

// di

const builder = new ContainerBuilder()
builder.register(UserRepository).use(InMemoryUserRepository);
builder.registerAndUse(SignUpService);
builder.registerAndUse(SignUpController);
const container = builder.build();

// app

useContainer(container);

createExpressServer({
	controllers: [baseDir + '/controllers/**/*{.js,.ts}']
}).listen(3001);

console.log('Connected to localhost:3001!');