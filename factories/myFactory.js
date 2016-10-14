myapp.factory('myFactory',function(){
      
      var obj=[];
      var main= [];

      obj.set = function(data){
            
            main = data;
      }
      obj.get =  function(){
      	return main;
      }
      return obj;
});
