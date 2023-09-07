const http = require("http");
//Importing express
const express = require("express");

const app = express();

//middleware
app.use((req, res, next) => {
  console.log("In the middleware");
  next(); //Allows the rquest to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

//creating a server
// const server = http.createServer(app);

//listening to server
// server.listen(3012);
app.listen(3012);
