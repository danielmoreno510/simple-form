type Form = {
  isFetching: boolean,
  initialValues: any;
  validationSchema: any;
  onSubmit(values: any): any;
};

export default Form;
