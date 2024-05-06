const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
const glob = require('glob')
app.use(express.urlencoded({ extended: false, limit: '50mb', parameterLimit: 100000 }));

app.use(express.json({ limit: '50mb' }));
app.use(cors());


let port = 4000;

const routesDir = path.join(__dirname, 'routes/*.js')
var files = glob.sync(routesDir.replace(/\\/g, '/'))

if (files.length !== 0) {
    for (let file of files) {
        app.use(require(file))
    }
}

var db = require('./config/databaseconfig');
db.connect(() => {
    app.listen(port, function () {
        console.log('Server listening on port ' + port);
    });
});
