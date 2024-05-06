const mongoose = require('mongoose')

const PDC = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company_Details'
    },
    DC_No: {
        type: String
    },
    DCDate: {
        type: String
    },
    Status:{
        type:String,
        enum:["Pending","Completed"],
        default:"Pending"
    },
    productDetails: [{
        SI_NO: {
            type: Number
        },
        Item_Description: {
            type: String
        },
        Grade: {
            type: String
        },
        HeatNumber: {
            type: String
        },
        Quantity: {
            type: String
        }
    }],
})

module.exports=mongoose.model('PDC',PDC)