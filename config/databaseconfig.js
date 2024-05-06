const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

module.exports.connect = (callback) => {
   // console.log("hi")
    mongoose.connect('mongodb://127.0.0.1:27017/RR_Inventory', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('connected', () => {
        console.log('--: DB Connected :--');
        callback();
    });

    mongoose.connection.on('error', (error) => {
        console.log('Connection Error: ', error);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('--: DB Disconnected :--');
    });
}