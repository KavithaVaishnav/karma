myapp.controller('popUpController',['$scope','myFactory','$uibModalInstance',function($scope,myFactory,$uibModalInstance){

    
    $scope.data = myFactory.get();
// adding details to table
       
		$scope.addDetails = function(){
			
            var flag=0;
		     if(($scope.taskId !=undefined) && ($scope.taskName !=undefined)&&(($scope.taskId !='')&&($scope.taskName !=''))){
			     for(var i=0;i<$scope.data.length;i++){
                      if($scope.taskId!=$scope.data[i].task_id){
                      flag=0;
		             }
		         else{
		         	flag=1;
              alert("existing id");
		         	break;
		         }
		     }
			 if(flag==0){          
			$scope.data.push({'task_id' : $scope.taskId,'task_name':$scope.taskName});

			$scope.taskId = '';
            $scope.taskName = '';
		    
		    myFactory.set($scope.data);
			}
		 
		 }
		
		};
          
          // cancel details function
          // $scope.cancelDetails = function(){
              
             
          //     // $scope.IsVisible = false;
          // }
    
    $scope.cancel = function () {
         $uibModalInstance.dismiss('cancel');
          $scope.taskId = '';
           $scope.taskName = '';
         };
		// remove function

	
}]);