const express = require('express');
const morgan = require('morgan');
const path = require('path');

// === LLAMAMOS AL ARCHIVO PARA CONECTAR A LA DB === //
const { mongoose } = require('./database');

const app = express();

// === SETTINGS === //
app.set('port', process.env.PORT || 3000);

// === MIDDLEWARES === //
app.use(morgan('dev'));
app.use(express.json());

// === ROUTES === //
app.use('/api/tasks',require('./routes/task.routes'))

// === STATIC FILES === //
app.use(express.static(path.join(__dirname, 'public')))

// === BOOT SERVER === //
app.listen(app.get('port'), () => {
    console.log(`SERVER ON PORT ${app.get('port')}`);
});

// sudo nano /proc/sys/fs/inotify/max_user_watches = 524288