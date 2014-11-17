demo.controller('SearchCtrl', [
	"$scope",
	"$firebase",
	"$routeParams",
	function ($scope, $firebase, $routeParams){
		
	var postsRef = new Firebase('https://glowing-heat-2588.firebaseio.com/posts'+$routeParams.postId);
	
	$scope.posts = $firebase(postsRef).$asObject();

    // $(document).ready(function(){

    //   var airlines = [];

    //     $.ajax({
    //       url:'/airline.json',
    //       dataType:'json',
    //       success: function(data){
            
    //         for (var i = 0, j = data.airlines.length; i < j; i++){
    //             if(typeof data.airlines[i].iata !== 'undefined'){
    //                 airlines.push(data.airlines[i].name + "||" +data.airlines[i].iata)
    //             }
    //         }
    //         console.log(airlines)
    //           $('#airline').autocomplete({
    //             source: airlines,
    //           });
    //       }
    //     });

    //   $('#airline').keyup(function(){
        
    //   });
    // });

	}// ENDS SearchCtrl
]);