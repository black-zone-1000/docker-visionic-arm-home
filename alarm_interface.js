var app = require('express')(), server = require('http').createServer(app), io = require('socket.io').listen(server);


//SERVER
server.listen(4455, '0.0.0.0');

app.get('/home',
	function (req, res) {
		res.send('Sending command');
		require('child_process').fork('arm_home.js');
	}
);


