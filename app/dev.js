var EmailIO = require('./io/EmailIO')

module.exports = function() {
    var connection = new WebSocket('ws://localhost:35729');
    connection.onmessage = function(msg) { 
        for(module in global.require.cache){
            if(global.require.cache.hasOwnProperty(module)){
                delete global.require.cache[module];
            }
        }
        EmailIO.disconnect()
        EmailIO.once('disconnected', function() {
            EmailIO.removeAllListeners()
            location.reload()
        })
    }
}

