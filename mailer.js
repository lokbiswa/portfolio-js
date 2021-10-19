const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { gmail } = require("googleapis/build/src/apis/gmail");
require("dotenv").config();

// parse credentials
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const user = process.env.EMAIL;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const AUTH_CODE = process.env.AUTH_CODE;
// accessing google api
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(mailObject) {
  try {
    //   traiding refresh token for access token.
    const accessToken = await oAuth2Client.getAccessToken();
    console.log(accessToken);
    //  transporter
    const transpot = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: user,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOption = {
      from: "lokbiswa@gmail.com",
      to: "lokbiswa@gmail.com",
      subject: `message from: ${mailObject.name}`,
      //   email format
      html: `sender informations: 
                <ul>
                    <li>${mailObject.name}</li>
                    <li>${mailObject.email}</li>
                </ul>
                <p>${mailObject.message}</p>`,
    };
    // send email
    const result = await transpot.sendMail(mailOption);
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = sendMail;
