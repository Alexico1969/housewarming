const fs = require('fs');
const path = './index.html'; // Adjust the path to your HTML file
let htmlContent = fs.readFileSync(path, 'utf8');
const apiKey = process.env.GOOGLE_API_KEY; // Use your actual environment variable name
htmlContent = htmlContent.replace('API_KEY_PLACEHOLDER', apiKey);
fs.writeFileSync(path, htmlContent);
