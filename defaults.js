var conventionalCommitTypes = require('./types');

module.exports = {
  types: conventionalCommitTypes,
  redmineMode: true,
  skipScope: true,
  maxHeaderWidth: 72,
  minHeaderWidth: 2,
  maxLineWidth: 100,
};
