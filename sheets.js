const { google } = require("googleapis");
const fs = require("fs");

// Load the service account JSON key
const credentials = JSON.parse(fs.readFileSync("json/booming-voice-450810-a7-ee9d5310a01c.json"));

// Authenticate with Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Get the Sheets instance
const sheets = google.sheets({ version: "v4", auth });

// Spreadsheet ID (Replace with your actual sheet ID)
const SPREADSHEET_ID = "ee9d5310a01c19d5335c814cea013b44deb175cd";
const SHEET_NAME = "newsletter-sheet-service"; 

// Function to add a new subscriber
async function addSubscriber(email) {
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:A`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[email, new Date().toISOString()]],
      },
    });

    console.log("Subscriber added:", response.data);
  } catch (error) {
    console.error("Error adding subscriber:", error);
  }
}
    console.error("Error adding subscriber:", error);



