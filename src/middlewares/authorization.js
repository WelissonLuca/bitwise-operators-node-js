const { decode } = require('../services/token')
const { validatePermission } = require('../services/authorization')

const extractToken = ctx => {
  const authorization = ctx.headers.authorization || ''
  return authorization.replace('Bearer ', '')
}

module.exports = requirePermission => async (ctx, next) => {
  const token = extractToken(ctx)
  const { permission } = decode(token)

  if (!validatePermission(permission, requirePermission)) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      status: 403,
      message: 'insufficient permissions',
      code: 'FORBIDDEN',
    })
  }

  await next()
}
