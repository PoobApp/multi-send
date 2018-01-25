# multi-send
multi-send api for nodejs

## Usage
```

const MultiSend = require('multi-send');

const multiSend = new MultiSend({
    user: 'myuser',
    password: 'mypassword',
});

multiSend.sendSMS("sentFrom", "972548811111", "My sms text", {  }, function(err, response) {

});

```

By Dor Shay ( Poob )