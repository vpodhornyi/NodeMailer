class ErrorHandler {
  setServerErrors(err, req, res, next) {
    res.status(500).json({
      message: 'Ooops... Something went wrong! Please try later!',
      err: err.message
    });
  }
}

export default ErrorHandler;
