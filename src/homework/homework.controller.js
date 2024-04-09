const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { homeworkValidation } = require('./homework.validator');
const userMiddleware = require('../user/user.middleware');
const { createHomework } = require('./homework.service');
const { getAllByUserId } = require('./homework.service');

router.post('/', homeworkValidation, userMiddleware, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: false,
      message: errors.array().map((item) => item.msg),
    });
  }

  const { text, happyRate } = req.body;
  const user = req.user;
  try {
    return res.json({
      status: true,
      message: 'Succes create homework',
      data: await createHomework({ text, happyRate, userId: user.id }),
    });
  } catch (error) {
    return res
      .json({
        status: false,
        message: error.message,
      })
      .status(400);
  }
});

router.get('/mine', userMiddleware, async (req, res) => {
  const user = req.user;
  try {
    return res.json({
      status: true,
      message: 'Succes get all homework',
      data: await getAllByUserId({ userId: user.id }),
    });
  } catch (error) {
    return res
      .json({
        status: false,
        message: error.message,
      })
      .status(400);
  }
});

module.exports = router;
