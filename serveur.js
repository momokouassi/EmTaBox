var http = require('http');
var fs = require('fs');
var mime = require('mime');
var bodyParser = require('body-parser');
var express = require('express');

// Middlewares
var serveStatic = require('serve-static');
var logger = require('morgan');

// Port utilisé
var port = 50;

var app = express();

app.use(logger(":method :url"));
app.use(serveStatic(__dirname));

// API
var api = express();
// Récupérer liste des dossiers
// GET /api/dossiers
api.get("/dossiers", function(req, res) {
	res.send([
		{value: "RECEPTION", label: "Boite de réception"},
		{value: "ARCHIVES", label: "Archives"},
		{value: "ENVOYES", label: "Messages envoyés"},
		{value: "SPAM", label: "Courrier indésirable"}
	]);
});
// Récupérer un dossier
// GET /api/dossiers/idDossier
api.get("/dossiers/:idDossier", function(req, res) {
	res.send([
		{id: 1, from: "Mikael", to: "Moïse", subject: "Je reviens", date: new Date(2017, 11, 11, 15, 30), content: "<b>Lorem ipsum</b> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
		{id: 2, from: "Emma", to: "Moïse", subject: "Bisous de l'espace", date: new Date(2017, 11, 10, 16, 30), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
		{id: 3, from: "Sofiane", to: "Moïse", subject: "Session foot ?", date: new Date(2017, 11, 10, 14, 25), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
		{id: 5, from: "Manu", to: "Moïse", subject: "Offre illimitée", date: new Date(2017, 11, 9, 4, 30), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
		{id: 6, from: "Emma", to: "Moïse", subject: "Hey, welcome !", date: new Date(2017, 11, 2, 19, 42), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
	]);
});
// Récupérer un mail
// GET /api/dossiers/idDossier/idMail
api.get("/dossiers/:idDossier/:idMail", function(req, res) {
	res.send({id: 1, from: "Mikael", to: "Moïse", subject: "Je reviens", date: new Date(2017, 11, 11, 15, 30), content: "<b>Lorem ipsum</b> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."});
});
// Envoyer un mail
// POST /api/envoi
app.use(bodyParser.json());
api.post("/envoi", function(req, res) {
	res.send({success: true, email: req.body});
});

app.use('/api', api);
http.createServer(app).listen(port);

console.log("Serveur démarré sur le port " + port);
console.log("Connectez vous à l'URL suivant : localhost:" + port);

//{"from":"Mikael","to":"Moïse","subject":"Je reviens","date":"2017-12-11T14:30:00.000Z","content":"<b>Lorem ipsum</b> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}