var express = require('express');
var router = express.Router();
const path = require('path'); // Import the path module
const { LoginPerson, sequelize } = require('../loginPerson');


router.get('/', function(req, res, next) {
  const filePath = path.join(__dirname, '../public/login.html');
  res.sendFile(filePath);
});

router.post('/', async function (req, res, next) {
  await main(req.body.username, req.body.password);
  res.send('du har ramt login ' + req.body.username + ' ' + req.body.password);
});

module.exports = router;

async function main(username, password){

  await sequelize.sync({ alter: true });

  const newLoginPerson = LoginPerson.build({
    username: username,
    password: password,
  });

  
  await newLoginPerson.save();

  const persons = await LoginPerson.findAll({
    raw: true, });
  console.log(persons); 
}