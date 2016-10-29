var app = angular.module("myApp",[]);

app.controller("myController", ["$scope","$http", function($scope, $http){

	var refresh = function() {	
		$http.get("/contactList").success(function(response){
			$scope.contactList = response;
			$scope.contact = "";
		});
	}

	refresh();

	$scope.addContact = function(){

		$http.post("/contactList", $scope.contact).success(function(response){
			console.log(response);
			refresh();
		})
	}

	$scope.editContact = function(id){
		$http.get("/contactList/" + id).success(function(response){
			$scope.contact = response;
		})
	}

	$scope.updateContact= function(){
		$http.put("/contactList/" + $scope.contact._id, $scope.contact)
			 .success(function(response){
			 	refresh();
		});
	}

	$scope.removeContact = function(id){
		$http.delete("/contactList/" + id).success(function(response){
			refresh();
		})
	}

}]);

