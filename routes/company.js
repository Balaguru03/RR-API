const express = require('express');

var app = express.Router();

var companyController = require(".././controller/company")

app.get("/company/getAll",companyController.getAllcompanyiRecord);
app.get("/company/getByCompanyId/:id",companyController.getcompanySingleRecord);

module.exports = app