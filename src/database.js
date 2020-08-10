const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);

// === URL DE MI DB === //
const URI = 'mongodb://localhost:27017/MERN-STACK';

// === CONECTAMOS A LA DB === //
mongoose.connect(URI, {useNewUrlParser: true})
.then(db => console.log('DB Connected'))
.catch(e=> console.log(e));

module.exports = mongoose;
