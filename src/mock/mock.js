var homeAllData = require('./homedata.json')
var classify = require('./classify.json')
module.exports = function() {
  return {
    "homedata": homeAllData,
    "classify": classify
  }
}
