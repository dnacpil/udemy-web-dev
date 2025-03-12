class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    supper(message);
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = false;
    this.errors = errors;

    //stack is only in dev environment
    if(stack){
        this.stack = stack
    }
    else{
        Error.captureStackTrace(this, this.constructor)
    }
  }
}
