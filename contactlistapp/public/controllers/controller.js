var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Controller . . .");

    var refresh = function() { 
		console.log('refresh was called . . .');
		$http.get('/contactlist')
			.then(function(response) {//route that we create to get the data from
				$scope.contactList = response.data; 
				$scope.contact = "";

				//buttons
				$scope.toggleAddBtn = true;
				$scope.toggleCancelBtn = false;
				$scope.toggleUpdateBtn = false;
				console.log('controller retrieve contactlist');
			}, function (response){
				//Second function handles error
				console.log('Error - something went wrong');
		});
	};
	refresh();

	$scope.cancelBtnClick = function() {
		refresh();
	}
/*
	$http.post('/contactlist', $scope.contact).then(function(response){
		console.log(response);
	});
*/
	$scope.addContact = function() {
		console.log('adding contact' + $scope.myForm.$valid);
		if ($scope.myForm.$valid) {
			$http.post('/contactlist', $scope.contact);// Data we are sending to the server			
			refresh();
		}
		
	};

	$scope.removeContact = function(id){
		console.log('removing contact id: ' + id);
		$http.delete('/contactlist/' + id).then(function(response){
			refresh();
		});
	}

	$scope.edit = function(id) { //set the value of edit on the input box
		console.log('editing contact: ' + id);
		$http.get('/contactlist/' + id).then(function(response){
			
			$scope.contact = response.data;
			//buttons
			$scope.toggleAddBtn = false;
			$scope.toggleCancelBtn = true;
			$scope.toggleUpdateBtn = true;
		});
	}

	$scope.updateContact = function() {
		console.log('updating contact: ' + $scope.contact._id);
		$http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(response){
			//buttons
			$scope.toggleAddBtn = true;
			$scope.toggleCancelBtn = false;
			$scope.toggleUpdateBtn = false;
			refresh();
		});		
	}

    console.log("done . . .");
}]);
