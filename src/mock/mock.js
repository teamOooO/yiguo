<<<<<<< HEAD
var homeAllData = require('./homedata.json')
var classify = require('./classify.json')
var issignin = require('./issignin.json')
<<<<<<< HEAD
<<<<<<< HEAD
=======
var detail = require('./detail.json')

>>>>>>> zhangboyu-0315-router-end
=======
var list = require('./list.json')
>>>>>>> yiguo-zhujieming
=======
var detail = require('./detail.json')

>>>>>>> zhangboyu-0315-router-end
module.exports = function() {
  return {
    "homedata": homeAllData,
    "classify": classify,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    "issignin": issignin
=======
    "detail": detail
>>>>>>> zhangboyu-0315-router-end
=======
    "issignin": issignin,
    "list": list
>>>>>>> yiguo-zhujieming
=======
    "issignin": issignin,
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
