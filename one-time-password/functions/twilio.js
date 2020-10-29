const twilio = require('twilio');

const twilioInfo = require('./twilio.json');

const accountSid = twilioInfo.accountSid;
 
const authToken = twilioInfo.authToken;

module.exports = new twilio.Twilio(accountSid, authToken);