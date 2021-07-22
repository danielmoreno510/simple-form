import { FETCH_CREATE_USER, PUT_CREATE_USER } from './types';
import { User } from '../../@types/components/CreateUser';

export const fetchCreateUser = (user: User) => ({
  type: FETCH_CREATE_USER,
  user,
});

export const putCreateUser = (createUserMessage: string) => ({
  type: PUT_CREATE_USER,
  createUserMessage
});
