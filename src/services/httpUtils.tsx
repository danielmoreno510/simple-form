import HandleHttpError from '../@types/services/httpUtils';

export const handleHttpError: HandleHttpError = (error, context, customErrorInfo) => {
  console.log(error, context, customErrorInfo);
};

export default handleHttpError;
