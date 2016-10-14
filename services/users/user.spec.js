describe('popUpController', function() {
  beforeEach(module('MyApp'));
  var $controller;

 beforeEach(inject(function(_$controller_) {
  $controller = _$controller_;
}));
 
describe('$scope.addDetails', function() {
    it('values added or not', function() {


           var modalInstance;
           modalInstance = {                    // Create a mock object using spies
            close: jasmine.createSpy('modalInstance.close'),
            dismiss: jasmine.createSpy('modalInstance.dismiss'),
            result: {
              then: jasmine.createSpy('modalInstance.result.then')
            } 
          }

      var $scope = {};
      var controller = $controller('popUpController', { $scope: $scope, $uibModalInstance:modalInstance}); 
      // var controller = $controller('popUpController', { $scope: $scope });
      $scope.taskId = '234';
      $scope.taskName='abcds';
      $scope.addDetails();
     expect($scope.data).toEqual(jasmine.objectContaining([Object({task_id: '234',task_name:'abcds'})])); 
    });

   
});
 });