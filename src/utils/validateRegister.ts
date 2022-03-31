import { UsernamePasswordInput } from '../resolvers/UsernamePasswordInput';
import { validateEmail } from './validateEmail';

export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.username.length <= 2) {
    return [
      {
        field: 'username',
        message: 'length must be greater than 2',
      },
    ];
  }

  if (options.username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'username cannot have an "@" sign',
      },
    ];
  }

  if (options.password.length <= 3) {
    return [
      {
        field: 'password',
        message: 'length must be greater than 3',
      },
    ];
  }

  if (!validateEmail(options.email)) {
    return [
      {
        field: 'email',
        message: 'enter a valid email',
      },
    ];
  }

  return null;
};
