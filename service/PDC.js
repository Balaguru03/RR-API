var PDC=require('.././model/PD')
var  bluebird = require('bluebird')

module.exports.insertPDC = (insertPdcQuery) => {
    return new bluebird((resolve, reject) => {
        let record = new PDC(insertPdcQuery);
        record.save((error, PDCDocument) => {
            if (error) {
                reject(error);
            } else {
                resolve(PDCDocument);
            }
        });
    });
};

module.exports.findPDC = query => {
    return new bluebird((resolve, reject) => {
        PDC.find(query)
        .populate('company','_id CompanyName AddressLine1 AddressLine2 State City Pincode')
            .exec((err, PDCDocument) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(PDCDocument);
                }
            });
    });
};

module.exports.findPDCById = query => {
    return new bluebird((resolve, reject) => {
        PDC.findOne(query)
        .populate('company','_id CompanyName AddressLine1 AddressLine2 State City Pincode')
            .exec((error, PDCDocument) => {
                console.log(PDCDocument)
                if (error) {
                    reject(error);
                } else {
                    resolve(PDCDocument);
                }
            });
    });
};

module.exports.DeletePDC = query =>{
    return new bluebird((resolve,reject)=>{
        PDC.deleteOne(query)
        .exec((error,PDCDocument)=>{
            if(error){
                reject(error);
            }
            else{
                resolve(PDCDocument)
            }
        })
    })
}

module.exports.UpdatePDC = (query,updateDataForPDC) =>{
    return new bluebird ((resolve,reject)=>{
        PDC.updateOne(query, { $set: updateDataForPDC })
        .exec((error,updatedInformation)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(updatedInformation)
            }
        })
    })
}
