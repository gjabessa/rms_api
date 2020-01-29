var mongoose = require('mongoose');
var database_const = require('../constants/db')

mongoose.connect(database_const.DB_URL, {useNewUrlParser: true,useUnifiedTopology:true}).then(function(){
  console.log('connection established')
},function(err){
  console.log('Error connecting')
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected')
});
