export const errorHandler = ( error ) => {
  if (!error.status) {
    // network error
    console.error({ error, message: "network error" })
  }
  if (error.response) {
    // Request made and server responded
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.error(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error', error.message);
  }
}