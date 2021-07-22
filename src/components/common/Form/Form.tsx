import React from 'react';
import { Formik } from 'formik';

import formController from './../../../@types/components/common/Form';

const Form = (Form: any, formikProps = {}) => {
  const FormController: React.FC<formController> = ({
    initialValues,
    validationSchema,
    onSubmit,
    ...formProps
  }) => (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...formikProps}
    >
      {(props) => <Form {...formProps} {...props} onSubmit={props.submitForm} />}
    </Formik>
  );
  return FormController;
};

export default Form;
