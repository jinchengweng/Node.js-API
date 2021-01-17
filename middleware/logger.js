//crear medio de ejecucion
const logger = (req, res, next) => {
    //  req.data = { msg: "Hello todos"};
      console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
      next();
  };

  module.exports = logger;