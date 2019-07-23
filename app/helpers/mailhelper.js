// nodeMailer = require('nodemailer'),

// module.exports = class MailHelper {
//     sendMail = (timestamp, userName) => {
//         let transporter = nodeMailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 465,
//             secure: true,
//             auth: {
//                 user: 'mukesh.bhatia85@gmail.com',
//                 pass: 'the kite'
//             }
//         });
//         let mailOptions = {
//             from: '"Mukesh Bhatia" <xx@gmail.com>', // sender address
//             to: "ritesh.7792@gmail.com", // list of receivers
//             subject: "Report submission notification", // Subject line
//             text: "Hi, your employee" + userName + " has submitted a report at " + timestamp, // plain text body
//             html: '<b>Report submission notification</b>' // html body
//         };
    
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 return console.log(error);
//             }
//             console.log('Message %s sent: %s', info.messageId, info.response);
//         });
//     }
// }
// // exports.sendMail = (timestamp, userName) => {
// //     let transporter = nodeMailer.createTransport({
// //         host: 'smtp.gmail.com',
// //         port: 465,
// //         secure: true,
// //         auth: {
// //             user: 'mukesh.bhatia85@gmail.com',
// //             pass: 'the kite'
// //         }
// //     });
// //     let mailOptions = {
// //         from: '"Mukesh Bhatia" <xx@gmail.com>', // sender address
// //         to: "ritesh.7792@gmail.com", // list of receivers
// //         subject: "Report submission notification", // Subject line
// //         text: "Hi, your employee" + userName + " has submitted a report at " + timestamp, // plain text body
// //         html: '<b>Report submission notification</b>' // html body
// //     };

// //     transporter.sendMail(mailOptions, (error, info) => {
// //         if (error) {
// //             return console.log(error);
// //         }
// //         console.log('Message %s sent: %s', info.messageId, info.response);
// //         });
// // }