function defineType(argumentToDefine) {
  if (
    Number.isNaN(argumentToDefine)
    || (typeof argumentToDefine !== 'number' && typeof argumentToDefine !== 'string')
  ) {
    return undefined;
  }

  return typeof argumentToDefine;
}

module.exports = defineType;
