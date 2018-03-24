var homeAllData = require('./homedata.json')
var classify = require('./classify.json')
var detail = require('./detail.json')
var community = require('./community.json')
var knowledge = require('./knowledge.json')
var livinghome = require('./livinghome.json')
module.exports = function() {
  return {
    "homedata": homeAllData,
    "classify": classify,
    "detail": detail,
    "community": community,
    "knowledge": knowledge,
    "livinghome": livinghome
  }
}
