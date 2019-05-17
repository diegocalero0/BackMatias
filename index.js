var express = require("express");
var app = express();

let enable = true;

app.get('/disable', (req, res) => {
    enable = req.query.enable;
    res.send('Okey: ' + enable)
});

app.get('/getEnable', (req, res) => {
    res.send(enable)
})

// Only works on 3000 regardless of what I set environment port to or how I set [value] in app.set('port', [value]).
app.listen(3000, () => {
    console.log('Run in port: 3000')
});