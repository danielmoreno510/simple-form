type CreateUser = {
  values: User;
  handleChange(): any;
  handleSubmit(): any;
  isValid: boolean;
  dirty: boolean;
  isFetching: boolean
};

export type User = {
  firstname: string,
  lastname: string,
  email: string
}

export default CreateUser