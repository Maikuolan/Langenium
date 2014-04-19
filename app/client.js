// Initialize the Langenium client

// Load and initialize the Ember application
global.L = require('./L')()

L.ember_app = require('./ember_app')()
require('./ember_app/routes/blog')(L.ember_app);
require('./ember_app/routes/index')(L.ember_app);
require('./ember_app/routes/games')(L.ember_app);

L.scenograph = require('./scenograph')()

L.scenograph.director.init(L);
L.scenograph.director.animate(L);

L.socket = io.connect(window.location.hostname);
L.socket.emit('pong', { time: new Date().getTime()});
L.socket.on('ping', function(data){
	$('#latency .latency').html(data.latency);
	L.socket.emit('pong', { time: new Date().getTime()});
});
