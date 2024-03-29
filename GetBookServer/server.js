var express = require('express'),
    app = express(),
    port = process.env.PORT || 3410;
    mongoose = require('mongoose'),
    Book = require('./models/book'),
    bodyParser = require('body-parser');

var cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var route = require('./routes/route');
route(app);

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://softwareA:EstoSeVaADescontrolar!@34.134.68.224:27017/sa-database?authSource=admin', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }

  app.listen(port, function() {
    console.log(`Node server running on http://localhost:${port}`);
  });
  
});
