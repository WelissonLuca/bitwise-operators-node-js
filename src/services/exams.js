const { Exam } = require('../../models/')

const createExam = exam => Exam.create(exam)

const findAll = () => Exam.findAll()

const findById = id => Exam.findById(id)

module.exports = {
  createExam,
  findAll,
  findById,
}
