var bluebird = require('bluebird');
var companyDetailsService = require(".././service/companyDetails");
var PDCService = require(".././service/PDC")

module.exports.PDCInsert = (request, response) => {
    return new bluebird((resolve) => {
        resolve(companyDetailsService.insertCompanyDetails(request.body.company))
    }).then(companydetails => {
        delete request.body.company
        console.log("req=>", request.body)

        let PDCRecord = {
            company: companydetails._id,
            ...request.body
        }
        console.log("test", PDCRecord)
        return PDCService.insertPDC(PDCRecord)
    })
        .then(data => {
            response.status(201)
                .json({
                    code: 201,
                    status: 'success',
                    data: data
                });
        })
        .catch(error => {
            response.status(500)
                .json({
                    code: 500,
                    status: 'error',
                    message: error
                })
        });
}

module.exports.getPDCSingleRecord = (req, res) => {
    PDCService.findPDCById({ _id: req.params.id }).then(PDCDetails => {
        let PDCRecord = PDCDetails
        res.json({
            code: 200,
            status: 'success',
            data: PDCRecord
        });
    }).catch(error => {
        res.json({
            code: 400,
            status: 'error',
            error: error
        });
    })
}

module.exports.getAllPDCiRecord = (req, res) => {
    PDCService.findPDC({  }).then(PDCDetails => {
        let PDCRecord = PDCDetails
        res.json({
            code: 200,
            status: 'success',
            data: PDCRecord
        });
    }).catch(error => {
        res.json({
            code: 400,
            status: 'error',
            error: error
        });
    })
}

module.exports.updatePDCRecord = (req, res) => {
    let query = {
        _id: req.params.id
    };
    PDCService.UpdatePDC(query,req.body).then(PDCDetails => {
        let PDCRecord = PDCDetails
        res.json({
            code: 200,
            status: 'success',
            data: PDCRecord
        });
    }).catch(error => {
        res.json({
            code: 400,
            status: 'error',
            error: error
        });
    })
}



module.exports.DeletePDCRecord = (req, res) => {
    PDCService.DeletePDC({ _id: req.params.id }).then(PDCDetails => {
        let PDCRecord = PDCDetails
        res.json({
            code: 200,
            status: 'success',
            data: PDCRecord
        });
    }).catch(error => {
        res.json({
            code: 400,
            status: 'error',
            error: error
        });
    })
}
