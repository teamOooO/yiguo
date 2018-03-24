var homeAllData = require('./homedata.json')
var classify = require('./classify.json')
var issignin = require('./issignin.json')
var list = require('./list.json')
module.exports = function() {
  return {
    "homedata": homeAllData,
    "classify": classify,
    "issignin": issignin,
    "list": list
  }
}
