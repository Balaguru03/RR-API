const express = require('express');

var app = express.Router();

var PDCController = require(".././controller/PDC")

app.get("/PDC/getAll",PDCController.getAllPDCiRecord);
app.get("/PDC/getBy/:id",PDCController.getPDCSingleRecord);
app.post("/PDC",PDCController.PDCInsert);
app.patch("/PDC/:id",PDCController.updatePDCRecord);
app.delete("/Delete/:id",PDCController.DeletePDCRecord);

module.exports = app;