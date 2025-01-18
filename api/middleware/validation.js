// Validation middleware
const validator = require('../helpers/validation.js');

const saveDrama = (req, res, next) => {
  const validationRule = {
    title : 'required|string',
    year : 'required|string',
    type : 'required|string',
    season: 'required|string',
    episodes : 'required|string',
    description : 'required|string',
    imageUrl: 'required|string',
    rating: 'required|string',
    genre: 'required|string'

  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Something is wrong with the information supplied',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
   saveDrama
};
