const ReportEntry = require('../models/reports.model.js');
const uuidv1 = require('uuid/v1');

exports.getReportsByProjectAndDateRange = (req, res) => {
    const startDate = new Date(req.params.startDate).toISOString();
    const endDate = new Date(req.params.endDate).toISOString();
    const projectName = req.params.projectName;

    ReportEntry.find(
        {
           dateOfEntry:{ $gte: startDate, $lte: endDate},
           projectName: projectName 
        }
    )
    .then(reportEntries => {
        if(!reportEntries) {
            return res.status(404).send({
                message: "No reports found for given user and date range"
            });            
        }

        console.log("PRinting report entries")
        console.log(reportEntries)

        let reportDictionary = {}

        reportEntries.forEach(element => {
            if (reportDictionary[element.reportId] === undefined) {
                var entryList = []
                entryList.push(element)
                reportDictionary[element.reportId] = entryList
                console.log(reportDictionary)
            } else {
                var entryList = reportDictionary[element.reportId]
                entryList.push(element)
                reportDictionary[element.reportId] = entryList;
            }
        })

        console.log('printing reports')

        console.log(reportDictionary)
        res.send(reportDictionary);
    }).catch(err => {
        console.log("Printing error")
        console.log(err)
        if(err.kind === 'ObjectId') {
            
            return res.status(404).send({
                message: "No reports found"
            });                
        }
        return res.status(500).send({
            message: "No reports found"        });
    });
}

exports.getReportsByUserProjectAndDateRange = (req, res) => {
    const userName = req.params.userName;
    const startDate = new Date(req.params.startDate).toISOString();
    const endDate = new Date(req.params.endDate).toISOString();
    const projectName = req.params.projectName;

    ReportEntry.find(
        {
           userName: userName, 
           dateOfEntry:{ $gte: startDate, $lte: endDate},
           projectName: projectName 
        }
    )
    .then(reportEntries => {
        if(!reportEntries) {
            return res.status(404).send({
                message: "No reports found for given user and date range"
            });            
        }

        console.log("PRinting report entries")
        console.log(reportEntries)

        let reportDictionary = {}

        reportEntries.forEach(element => {
            if (reportDictionary[element.reportId] === undefined) {
                var entryList = []
                entryList.push(element)
                reportDictionary[element.reportId] = entryList
                console.log(reportDictionary)
            } else {
                var entryList = reportDictionary[element.reportId]
                entryList.push(element)
                reportDictionary[element.reportId] = entryList;
            }
        })

        console.log('printing reports')

        console.log(reportDictionary)
        res.send(reportDictionary);
    }).catch(err => {
        console.log("Printing error")
        console.log(err)
        if(err.kind === 'ObjectId') {
            
            return res.status(404).send({
                message: "No reports found"
            });                
        }
        return res.status(500).send({
            message: "No reports found"        });
    });
}

exports.getReportsByUserAndDateRange = (req, res) => {
    const userName = req.params.userName;
    const startDate = new Date(req.params.startDate).toISOString();
    const endDate = new Date(req.params.endDate).toISOString();

    ReportEntry.find(
        {
           userName: userName, 
           dateOfEntry:{ $gte: startDate, $lte: endDate}, 
        }
    )
    .then(reportEntries => {
        if(!reportEntries) {
            return res.status(404).send({
                message: "No reports found for given user and date range"
            });            
        }

        console.log("PRinting report entries")
        console.log(reportEntries)

        let reportDictionary = {}

        reportEntries.forEach(element => {
            if (reportDictionary[element.reportId] === undefined) {
                var entryList = []
                entryList.push(element)
                reportDictionary[element.reportId] = entryList
                console.log(reportDictionary)
            } else {
                var entryList = reportDictionary[element.reportId]
                entryList.push(element)
                reportDictionary[element.reportId] = entryList;
            }
        })

        console.log('printing reports')

        console.log(reportDictionary)
        res.send(reportDictionary);
    }).catch(err => {
        console.log("Printing error")
        console.log(err)
        if(err.kind === 'ObjectId') {
            
            return res.status(404).send({
                message: "No reports found"
            });                
        }
        return res.status(500).send({
            message: "No reports found"        });
    });
}


exports.submitReport = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Report content can not be empty"
        });
    }
    console.log("Printing req body")
    console.log(req.body.report)
    const report = req.body.report;
    const reportId = uuidv1();
    report.forEach(element => {
        const reportEntry = new ReportEntry({
            userName: element.userName,
            projectName:element.projectName,
            type: element.type,
            start: new Date(element.start).toISOString(),
            end: new Date(element.end).toISOString(),
            dateOfEntry: new Date(element.dateOfEntry).toISOString(),
            reportId: reportId
        })
        reportEntry.save()
        .then(data => {
            // TODO: Write code to send email here
            res.send("Report saved successfully")
        }).catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating the Note."
            })
        })
    });
};

exports.findOne = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', '*');
    console.log("Username passed in req is " + req.params.userName);
    ReportEntry.find({userName: req.params.userName})
    
    .then(reports => {
        if(!reports) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.userName
            });            
        }
        console.log('printing reports')

        console.log(reports)
        res.send(reports);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.userId
        });
    });
};

