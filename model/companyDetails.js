const mongoose = require('mongoose')

const companyInfo = new mongoose.Schema({
    CompanyName:{
        type:String
    },
    AddressLine1:{
        type:String
    },
    AddressLine2:{
        type:String
    },
    State:{
        type:String
    },
    City:{
        type:String
    },
    Pincode:{
        type:String
    }
})

module.exports = mongoose.model('Company_Details',companyInfo)