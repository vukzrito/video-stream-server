const NodeMediaServer = require('node-media-server');
const config = {
	rtmp:{
		port:1935,
		chunk_size:60000,
		gop_cache:true,
		ping:30,
		ping_timeout:60
	},
	http: {
		port:3000,
		allow_origin: '*'
	}
};

var server = new NodeMediaServer(config);
server.run();

