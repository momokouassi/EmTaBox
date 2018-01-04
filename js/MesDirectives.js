angular.module("MesDirectives", [])
	.directive("contenuMail", function() {
		return {
			// Forme de la directive
			restrict: "E",
			// Element de balise
			template:  '<div id="mail_present"> \
					<h2>{{email.subject}}</h2> \
					<p class="champ_present"> \
						<span class="intro">De :</span> \
						<span class="content">{{email.from}}</span> \
					</p> \
					<p class="champ_present"> \
						<span class="intro">À :</span> \
						<span class="content">{{email.to}}</span> \
					</p> \
					<p class="champ_present"> \
						<span class="intro">Date :</span> \
						<span class="content">{{email.date | date: \'dd/MM/yyyy HH:mm\'}}</span> \
					</p> \
					<div class="text"> \
						<p ng-bind-html="email.content"></p> \
					</div> \
				</div>',
			scope: {
				email: "="
			}
		}
	})
	.directive("nouveauMail", function() {
		return {
			restrict: "E",
			template: '<div id="nouveau_mail"> \
					<form name="formNouveauMail"> \
						<div class="grp_input"> \
							<label>À</label> \
							<input type="email" ng-model="nouveauMail.to" /> \
						</div> \
						<div class="grp_input"> \
							<label>Objet</label> \
							<input type="text" ng-model="nouveauMail.subject" /> \
						</div> \
						<div class="grp_input"> \
							<label>Message</label> \
							<textarea rows="10" type="text" ng-model="nouveauMail.content" placeholder="Ecrire..."></textarea> \
						</div> \
						<div class="grp_input grp_input_btn"> \
							<button class="envoyer" ng-click="clickEnvoyerMail()">Envoyer</button> \
							<button class="raz" ng-click="razMail()">Effacer</button> \
						</div> \
					</form> \
				</div>',
			scope: {
				envoiMail: "&"
			},
			controller: function($scope) {
				$scope.clickEnvoyerMail = function(argument) {
					$scope.envoiMail({nouveauMail: $scope.nouveauMail});
				}

				/**
				 * Initialise un nouveau mail
				 */
				$scope.razMail = function() {
					$scope.nouveauMail = {
						from: "Moïse",
						date: new Date()
					};
				}

				$scope.$on("initFormNouveauMail", function() {
					$scope.razMail();
				});
			}
		}
	});