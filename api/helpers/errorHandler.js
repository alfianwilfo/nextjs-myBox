let errorHandler = (error, req, res, next) => {
  console.log(error.name);
  let status = 500;
  let message = "Internal server error";

  switch (error.name) {
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      status = 400;
      message = error.errors[0].message;
      break;
  }
  res.status(status).json({ message });
};
module.exports = errorHandler;
