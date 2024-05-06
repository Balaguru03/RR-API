var companyDetailsService = require(".././service/companyDetails");



module.exports.getcompanySingleRecord = (req, res) => {
    companyDetailsService.findCompanyDetailById({ _id: req.params.id }).then(companyDetails => {
        let companyRecord = companyDetails
        res.json({
            code: 200,
            status: 'success',
            data: companyRecord
        });
    }).catch(error => {
        res.json({
            code: 400,
            status: 'error',
            error: error
        });
    })
}

module.exports.getAllcompanyiRecord = (req, res) => {
    companyDetailsService.findCompanyDetail({  }).then(companyDetails => {
        let companyRecord = companyDetails
        res.json({
            code: 200,
            status: 'success',
            data: companyRecord
        });
    }).catch(error => {
        res.json({
            code: 400,
            status: 'error',
            error: error
        });
    })
}