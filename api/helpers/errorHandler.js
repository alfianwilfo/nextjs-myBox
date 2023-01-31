let errorHandler = (error, req, res, next) => {
  let status = 500;
  let message = "Internal server error";

  switch (error.name) {
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      status = 400;
      message = error.errors[0].message;
      break;
    case "validator":
      status = error.status;
      message = error.message;
  }
  res.status(status).json({ message });
};
module.exports = errorHandler;
