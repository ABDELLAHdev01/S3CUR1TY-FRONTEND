import { ResolveFn } from '@angular/router';
import { User } from 'src/app/domain/user-model';

export const userResolver: ResolveFn<User> = (route, state) => {
  return true;
};
