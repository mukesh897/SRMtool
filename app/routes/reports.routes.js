module.exports = (app) => {
    const reports = require('../controllers/reports.controllers.js');

    
  

    // Retrieve all Notes
    app.post('/reports/submitReport', reports.submitReport);

    app.get('/reports/byuser/:userName/:startDate/:endDate', reports.getReportsByUserAndDateRange)

    app.get('/reports/byuser/:userName/:projectName/:startDate/:endDate', reports.getReportsByUserProjectAndDateRange)

    app.get('/reports/byproject/:projectName/:startDate/:endDate', reports.getReportsByProjectAndDateRange)


    // Retrieve a single Note with noteId
    app.get('/reports/:userName', reports.findOne);

    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
}