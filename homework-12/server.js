const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  const currentUserName = os.userInfo().username;
  const osType = os.type();
  const systemUptimeInMinutes = (os.uptime() / 60).toFixed(2);
  const currentWorkDirectory = path.dirname(__filename);
  const serverFileName = path.basename(__filename);

  const htmlPage = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>System Information</title>
    </head>
    <body>
      <h1>System information</h1>
      <p>Current user name: ${currentUserName}</p>
      <p>OS type: ${osType}</p>
      <p>System work time: ${systemUptimeInMinutes} minutes</p>
      <p>Current work directory: ${currentWorkDirectory}</p>
      <p>Server file name: ${serverFileName}</p>
    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.end(htmlPage);
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
