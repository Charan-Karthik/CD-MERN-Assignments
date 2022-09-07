// restructured imports to be require (kept on getting errors otherwise)
import User from './User.js'
import Company from './Company.js'

// added "type": "module" to package.json to allow for this; need to do this and use import and NOT require or use require and not import faker in the other classes
import  Express  from 'express';
const express = Express

// const User = require('./User')
// const Company = require('./Company')

// const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser. Navigate to '/api/users/new' to see a new user object. Navigate to '/api/companies/new' to see a new company object. Navigate to '/api/user/company' to see both a new user object and a new company object.");
});

app.get("/", (req, res) => {
    res.send("Please navigate to 'localhost:8000/api'");
});

app.get("/api/users/new", (req, res) => {
    res.send(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.send(new Company());
});

app.get("/api/user/company", (req, res) => {
    const newUserAndCompany = {
        "New User": new User(),
        "New Company": new Company()
    }
    res.send(newUserAndCompany);
});

// this needs to be below the other code blocks
const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
