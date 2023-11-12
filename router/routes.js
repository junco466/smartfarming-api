const info = require('../components/info/network');

const routes = function(server){
    server.use('/v1/info', info);
}

module.exports = routes;
