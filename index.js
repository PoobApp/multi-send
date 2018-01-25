const request = require('request');

const baseUrl = 'http://api.multisend.co.il/MultiSendAPI/sendsms';
module.exports = class MultiSend {
    constructor({ user, password }) {
        if (!user || !password) {
            throw new Error('Missing username or password');
        }
        
        this.user = user;
        this.password = password;
    }

    sendSMS(from = 'Poob', recipient, message, options = {}, cb) {
        const msg = {
            from,
            recipient,
            message,
        }

        msg.user = this.user;
        msg.password = this.password;

        console.log('Sending SMS', msg)
        request({ url: baseUrl, qs: msg }, function (err, response, body) {
            if (err) {
                throw (err);
            }

            if (cb) {
                cb(body);
            }
        });
    }
}