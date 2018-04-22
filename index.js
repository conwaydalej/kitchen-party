const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const index = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',index);
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.use('/tone', express.static(path.join(__dirname, '/node_modules/tone/build/')));
app.use('/foundation', express.static(path.join(__dirname, '/node_modules/foundation-sites/dist/')));
app.use('/what-input', express.static(path.join(__dirname, '/node_modules/what-input/dist/')));
app.use('/sounds/diatonic-accordion', express.static(path.join(__dirname, 'public/sounds/diatonic-accordion')));

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('startnote', function(msg){
        io.emit('startnote', msg);
    });
    socket.on('stopnote', function(msg){
        io.emit('stopnote', msg);
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});