const { body } = require('express-validator');

const homeworkValidation = [
  body('text').notEmpty().withMessage('text is required'),
  body('happyRate').notEmpty().withMessage('happyRate is required'),
];

module.exports = {
  homeworkValidation,
};
