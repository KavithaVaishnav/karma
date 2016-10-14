
	myapp.controller("mainController",function($scope,$translate,$uibModal,myFactory){
         
         $scope.onlyNumbers = /^\d+$/;
         // $scope.IsVisible = false;
		// $scope.addNew = function(){

  //               $scope.IsVisible = true;
               
		// }

    $scope.open = function (){
    var modalInstance = $uibModal.open({
      
        templateUrl: 'partials/popup.html',
        controller: 'popUpController'
       
    });
  };


    // table content
    $scope.tasks = [
                      {
                      	'task_id' : '100',
                        'task_name':'task 1'
                       },
                       {
                      	'task_id' : '101',
                        'task_name':'task 2'
                       },
                       {
                      	'task_id' : '103',
                        'task_name':'task 3'
                       }

                    ]
		
    myFactory.set($scope.tasks);
		$scope.remove = function($index){
             
              $scope.tasks.splice($index,1);
               myFactory.set($scope.tasks);
           
		}

    // remove function ends

    // translate function
    $scope.changeLanguage = function(key){
      $translate.use(key);
    }

	});