// ci-test.js
const http = require('http');
const app = require('./app'); 

const server = app.listen(3000, () => {
  http.get('http://localhost:3000/', (res) => {
    if (res.statusCode === 200) {
      console.log('Health check passed');
    } else {
      console.error('Health check failed');
      process.exit(1);
    }
    server.close(); 
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
    server.close();
    process.exit(1);
  });
});
