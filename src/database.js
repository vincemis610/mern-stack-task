const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);

const URI = 'mongodb://localhost:27017/MERN-STACK';

mongoose.connect(URI, {useNewUrlParser: true})
.then(db => console.log('DB Connected'))
.catch(e=> console.log(e));

module.exports = mongoose;
