const mongoose = require('mongoose');

const ReportSchema = mongoose.Schema({
    userName: String,
    projectName: String,
    type: String,
    start: Date,
    End: Date,
    dateOfEntry: Date,
    reportId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('ReportEntry', ReportSchema);