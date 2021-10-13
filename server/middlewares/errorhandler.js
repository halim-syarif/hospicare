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
  }

  console.log(err);
  console.log(err.name);
  res.status(code).json({ message });
};

module.exports = errorHandler;
