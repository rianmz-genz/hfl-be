const {
  addHomeworkToDB,
  getAllByUserIdFromDB,
} = require('./homework.repository');
const HomeworkResource = require('./homework.resource');

const createHomework = async ({ text, happyRate, userId }) =>
  await addHomeworkToDB({ text, happyRate, userId });

const getAllByUserId = async ({ userId }) =>
  (await getAllByUserIdFromDB({ userId })).map(
    (homework) => new HomeworkResource(homework),
  );

module.exports = {
  createHomework,
  getAllByUserId,
};
