const CompanyDetail = require(".././model/companyDetails"),
    bluebird = require("bluebird");

module.exports.insertCompanyDetails = insertCompanydetailsDocument => {
    return new bluebird((resolve,reject) => {
        let record = new CompanyDetail(insertCompanydetailsDocument);
         record.save((error, insertCompanydetailsDocument) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(insertCompanydetailsDocument);
            }
        })
    })
}


module.exports.findCompanyDetail = query => {
    return new bluebird((resolve, reject) => {
        CompanyDetail.find(query)
            .exec((err, CompanyDetailDocument) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(CompanyDetailDocument);
                }
            });
    });
};

module.exports.findCompanyDetailById = query => {
    return new bluebird((resolve, reject) => {
        CompanyDetail.findOne(query)
            .exec((error, CompanyDetailDocument) => {
                console.log(CompanyDetailDocument)
                if (error) {
                    reject(error);
                } else {
                    resolve(CompanyDetailDocument);
                }
            });
    });
};