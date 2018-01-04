/**
 * Application
 */
var app = angular.module("app", [
		"webmail"
	]);

/**
 * Modules
 */
 var webmail = angular.module("webmail", ["ngSanitize", "ui.tinymce", "MailServiceMock", "MesDirectives"]);

 /**
  * Configuration
  */
  webmail.config(['$locationProvider', function($locationProvider) {
  	// Évite d'avoir un hashage d'URL au format "#!#/"
  	$locationProvider.hashPrefix('');
  }]);

/**
 * Contrôleurs
 */
 webmail.controller("triCtrl", function($scope) {/*
 	$scope.triParExpediteur = function() {
 		
 	}
 	$scope.triParDestinataire = function() {
 		
 	}*/
 });

 webmail.controller("webmailCtrl", function($scope, $location, $filter, mailService) {
	// Nombre de messages dans la boîte de réception
	$scope.messagesQuantities = 0;
	$scope.dossierCourant = null;
	$scope.emailCourant = null;
	$scope.vueCourante = null;
	$scope.champTri = null;
	$scope.triDesc = true;
	$scope.afficherNouveauMail = false;

	$scope.champs = mailService.getChamps();

	/**
	 * Affiche le contenu d'un dossier
	 */
	$scope.afficherDossier = function(valeurDossier) {
	$scope.vueCourante = "vueDossier";
		$scope.dossierCourant = mailService.getDossier(valeurDossier);
		if (valeurDossier) {
			$scope.messagesQuantities = $scope.dossierCourant.emails.length;
		}
	}

	/**
	 * Affiche le contenu d'un mail
	 */
	$scope.afficherMail = function(valeurDossier, idMail) {
	$scope.vueCourante = "vueContenuMail";
		$scope.emailCourant = mailService.getMail(valeurDossier, idMail);
	}

	/**
	 * Accède au contenu d'un email
	 */
	$scope.versEmail = function(dossier, mail) {
		$location.path("/" + dossier.value + "/" + mail.id);
	}

	/**
	 * Tri la liste d'emails par champ
	 */
 	$scope.triParChamp = function(champ) {
 		if ($scope.champTri == champ) {
 			$scope.triDesc = !$scope.triDesc;
		} else {
 			$scope.champTri = champ;
 			$scope.triDesc = true;
 		}
 	}

	/**
	 * Retourne l'icône attendue en fonction d'un tri donné
	 */
 	$scope.cssTriChevrons = function(champ) {
 		return {
 			fa: $scope.champTri == champ.alias,
 			'fa-caret-down': $scope.champTri == champ.alias && $scope.triDesc == true,
 			'fa-caret-up': $scope.champTri == champ.alias && $scope.triDesc == false
 		};
 	}

	/**
	 * Envoi un mail
	 */
	$scope.envoyerMail = function(nouveauMail) {
		mailService.envoyerMail(nouveauMail);
		$location.path("/");
	}

	/**
	 * Réinitialise le champ de recherche
	 */
 	$scope.razChampRecherche = function() {
 		$scope.expressionRecherchee = "";
 	}

 	/**
 	 * Configuration du formulaire de messagerie via TinyMCE
 	 */
 	$scope.optionsTinyMCE = {
 		language: "fr_FR",
 		statusbar: false,
 		menubar: false
 	}

	/**
	 * Récupère le dossier et le mail voulu
	 */
	$scope.$watch(function() {
		return $location.path();
	},
	function(nouveauChemin) {
		var tabChemin = nouveauChemin.split("/");
		if (tabChemin.length > 1 && tabChemin[1]) {
			if (tabChemin[1] == "nouveauMail") {
				$scope.vueCourante = "vueNouveauMail";
				$scope.afficherNouveauMail = true;
				$scope.$broadcast("initFormNouveauMail");
			} else {
				var valeurDossier = tabChemin[1];
				$scope.afficherDossier(valeurDossier);
				if (tabChemin.length > 2) {
					var valeurEmail = tabChemin[2];
					$scope.afficherMail(valeurDossier, valeurEmail);
				} else {
					$scope.afficherDossier(valeurDossier);
				}
			}
		} else {
			$scope.vueCourante = null;
		}
	});

	$scope.dossiers = mailService.getDossiers();
});