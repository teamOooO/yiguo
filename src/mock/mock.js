var homeAllData = require('./homedata.json')
var classify = require('./classify.json')
var issignin = require('./issignin.json')
module.exports = function() {
  return {
    "homedata": homeAllData,
    "classify": classify,
    "issignin": issignin
  }
}
