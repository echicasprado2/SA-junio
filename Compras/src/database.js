const mongoose = require('mongoose');

mongoose.connect('mongodb://softwareA:EstoSeVaADescontrolar!@34.134.68.224:27017/sa-database?authSource=admin',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database is Connected'))
.catch(err => console.log(err));