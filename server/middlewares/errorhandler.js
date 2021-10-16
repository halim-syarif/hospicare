const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = "internal server error";

  switch (err.name) {
    case "emailPasswordRequired":
      code = 401;
      message = "Email or password can't be empty";
      break;

    case "UserNotFound":
      code = 401;
      message = "Invalid Email/Password";
      break;

    case "WrongFormatId":
      code = 401;
      message = "Id Must be a Number";
      break;

    case "IdNotFound":
      code = 404;
      message = "Id not found";
      break;

    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      code = 400;
      message = err.errors.map((err) => {
        return err.message;
      });
      break;

    case "Token Invalid":
      code = 401;
      message = `Authentication Failed`
      break;

    case "JsonWebTokenError":
      if (err.message == "jwt must be provided") {
        code = 401;
        message = "You must login first"
      } else if (err.message == "jwt malformed"){
        code = 403;
        message = "You token is invalid"
      } else {
        code = 401;
        message = err.message
      }
      break;

    case 'Authorization Failed':
      code = 403
      message = 'You dont have permission'
      break;
    case 'found no patient':
      code = 404
      message = err.message
      break;
    case 'no appointment data for this patient':
      code = 404
      message = err.message
      break;
    case 'no doctor found':
      code = 404
      message = err.message
      break; 
    case 'not a doctor':
      code = 404
      message = err.message
      break;
    case 'no appointment found':
      code = err.code
      message = err.message
      break;
  }

  console.log(err);
  console.log(err.name);
  res.status(code).json({ message });
};

module.exports = errorHandler;
