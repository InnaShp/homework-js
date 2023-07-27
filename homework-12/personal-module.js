const http = require('http');
const server = http.createServer((req, res) => {
  const userName = 'Inna'; 

  const getGreetingMessage = () => {
    const currentHour = new Date().getHours();
    let greeting = '';
    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }
    return `${greeting}, ${userName}`;
  };

  const greetingMessage = getGreetingMessage();
  const currentDate = new Date().toString();

  const htmlPage = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Greeting Page</title>
    </head>
    <body>
      <p>Date of request: ${currentDate}</p>
      <p>${greetingMessage}</p>
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
