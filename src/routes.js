const Router = require('koa-router')

// middlewares
const error = require('./middlewares/error')
const authenticated = require('./middlewares/auth')
const authorized = require('./middlewares/authorization')

// handlers
const users = require('./handlers/users')
const auth = require('./handlers/auth')

const { authorization: authorizationConfig } = require('../config')

const { permissions } = authorizationConfig

const router = new Router()

router.use(error)

router.get('/users', authenticated, authorized(permissions.manageUsers), users.getAllUsers)
router.post('/users', authenticated, users.createUser)

router.get('/exams', authenticated, authorized(permissions.manageExams), async (ctx, next) => {
  ctx.body = 'exams'
  await next()
})

router.get(
  '/personalInfo',
  authenticated,
  authorized(permissions.getPersonalInfo),
  async (ctx, next) => {
    ctx.body = 'exams'
    await next()
  }
)

router.get(
  '/medicines',
  authenticated,
  authorized(permissions.getMedicines),
  async (ctx, next) => {
    ctx.body = 'exams'
    await next()
  }
)
router.post('/auth', auth.authenticate)

module.exports = router
