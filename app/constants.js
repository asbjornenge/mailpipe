var keyMirror = require('react/lib/keyMirror');

module.exports = {

    ActionTypes: keyMirror({
        VIEW_SWITCH   : null,        
        SERVER_LOGIN  : null,
        SERVER_LOGOUT : null,
        SERVER_READY  : null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION : null,
        VIEW_ACTION   : null
    }),

};
