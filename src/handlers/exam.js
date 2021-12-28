const ExamService = require('../services/exam')

const getAllExams = async ctx => {
  ctx.body = await ExamService.getExams()
}

const getExamById = async ctx => {
  ctx.body = await ExamService.getExamById(ctx.params.id)
}

const createExam = async ctx => {
  ctx.body = await ExamService.createExam(ctx.request.body)
}

module.exports = {
  getAllExams,
  getExamById,
  createExam,
}
