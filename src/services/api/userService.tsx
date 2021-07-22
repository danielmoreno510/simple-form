import http from '../http';

type Data = {data: any};

export const createUser = async (user: any) => {
  const {data}: Data = await http.post('/users', user);
  return data;
};

export default createUser;