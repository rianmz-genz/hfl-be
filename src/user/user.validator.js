const { body } = require('express-validator');

const userValidation = [
  body('email').notEmpty().withMessage('email is required'),
  body('password').notEmpty().withMessage('password is required'),
];

module.exports = {
  userValidation,
};
