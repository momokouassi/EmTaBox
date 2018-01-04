var mailServiceMock = angular.module("MailServiceMock", []);

mailServiceMock.factory("mailService", function() {
	/**
	 * Données fictives
	 */
	var dossiers = [
		{
			value: "RECEPTION", label: "Boite de réception", emails: [
				{id: 1, from: "Mikael", to: "Moïse", subject: "Je reviens", date: new Date(2017, 11, 11, 15, 30), content: "<b>Lorem ipsum</b> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
				{id: 2, from: "Emma", to: "Moïse", subject: "Bisous de l'espace", date: new Date(2017, 11, 10, 16, 30), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
				{id: 3, from: "Sofiane", to: "Moïse", subject: "Session foot ?", date: new Date(2017, 11, 10, 14, 25), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
				{id: 5, from: "Manu", to: "Moïse", subject: "Offre illimitée", date: new Date(2017, 11, 9, 4, 30), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
				{id: 6, from: "Emma", to: "Moïse", subject: "Hey, welcome !", date: new Date(2017, 11, 2, 19, 42), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		]},
		{
			value: "ARCHIVES", label: "Archives", emails: [
					{id: 1, from: "Mikael", to: "Moïse", subject: "Vikings, c'est top", date: new Date(2017, 10, 30, 18, 17), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{id: 2, from: "Emma", to: "Moïse", subject: "Un jour, ça ira", date: new Date(2017, 10, 19, 19, 46), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{id: 3, from: "Sofiane", to: "Moïse", subject: "Merci pour les baskets", date: new Date(2017, 11, 27, 15, 21), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
		]},
		{
			value: "ENVOYES", label: "Messages envoyés", emails: [
					{id: 1, from: "Moïse", to: "Candy", subject: "Soirée ?", date: new Date(2017, 11, 11, 8, 9), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{id: 2, from: "Moïse", to: "Gims", subject: "Prochain album", date: new Date(2017, 11, 10, 21, 5), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{id: 3, from: "Moïse", to: "Didier", subject: "On est prêt", date: new Date(2017, 11, 10, 12, 20), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{id: 5, from: "Moïse", to: "Benoit", subject: "Sofiane veut faire un foot", date: new Date(2017, 11, 9, 8, 39), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{id: 6, from: "Moïse", to: "Tsubasa", subject: "Va à l'OM", date: new Date(2017, 11, 2, 7, 16), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		]},
		{
			value: "SPAM", label: "Courrier indésirable", emails: [
					{id: 1, from: "Sofinnoga", to: "Moïse", subject: "Découvrez nos offres (-10%)", date: new Date(2017, 10, 26, 6, 15), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					{id: 2, from: "Facebook", to: "Moïse", subject: "Vous avez une notification de...", date: new Date(2017, 10, 10, 17, 23), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
		]}
	];

	/**
	 * Champs de mails
	 */
	var champs = [
		{description: "De", alias: "from"},
		{description: "À", alias: "to"},
		{description: "Objet", alias: "subject"},
		{description: "Date", alias: "date"}
	];

	return {
		getDossiers: function() {
			return dossiers;
		},
		getDossier: function(valeurDossier) {
			var dossierRetourne = null;
			dossiers.forEach(function(item) {
				if (item.value == valeurDossier) {
					dossierRetourne = item;
				}
			});
			return dossierRetourne;
		},
		getChamps: function() {
			return champs;
		},
		getMail: function(valeurDossier, idMail) {
			var dossier = this.getDossier(valeurDossier);

			if (dossier) {
				for (var j = 0; j < dossier.emails.length; j++) {
					if (dossier.emails[j].id == idMail) {
						return dossier.emails[j];
					}
				}
			}
			return null;
		},
		envoyerMail: function(mail) {
			var dossier = this.getDossier("ENVOYES"),
				idDernierMail = 0;

			dossier.emails.forEach(function(item) {
				if (item.id == idDernierMail) {
					idDernierMail = item.id;
				}
			});

			mail.id = idDernierMail + 1;

			dossier.emails.push(mail);
		}
	}
});