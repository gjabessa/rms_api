var mongoose = require('mongoose');
var database_const = require('../constants/db')

mongoose.connect(database_const.DB_URL, {useNewUrlParser: true,useUnifiedTopology:true})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected')
});

module.exports = db