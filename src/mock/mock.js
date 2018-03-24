<<<<<<< HEAD
var homeAllData = require('./homedata.json')
var classify = require('./classify.json')
<<<<<<< HEAD
var issignin = require('./issignin.json')
=======
var detail = require('./detail.json')

>>>>>>> zhangboyu-0315-router-end
module.exports = function() {
  return {
    "homedata": homeAllData,
    "classify": classify,
<<<<<<< HEAD
    "issignin": issignin
=======
    "detail": detail
>>>>>>> zhangboyu-0315-router-end
  }
}
=======
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
>>>>>>> sj-201803015-homepage
