const prisma = require('../database');
const { v4: uuidv4 } = require('uuid');

const addHomeworkToDB = async ({ text, happyRate, userId }) =>
  prisma.homework.create({
    data: {
      id: uuidv4(),
      text,
      happyRate,
      userId,
    },
  });

const getAllByUserIdFromDB = async ({ userId }) =>
  prisma.homework.findMany({
    where: {
      userId,
    },
  });

module.exports = {
  addHomeworkToDB,
  getAllByUserIdFromDB,
};
