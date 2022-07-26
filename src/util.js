export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};
//creats function that returns error message
// error object. checks if response and message exists then return error.response.data.message from backend
// otherwise returns general error message, error.message
