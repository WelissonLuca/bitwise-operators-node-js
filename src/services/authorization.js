const validatePermission = (userPermission, requirePermission) =>
  userPermission & requirePermission

module.exports = { validatePermission }
