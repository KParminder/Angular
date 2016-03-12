var app=angular.module("myApp",[]);
app.controller("slideCtrl",function($scope){
	
$scope.slider=["http://lorempixel.com/400/200","http://lorempixel.com/g/400/200/food","http://lorempixel.com/400/200","http://lorempixel.com/400/200","http://lorempixel.com/400/200"];
$scope.ind=0;

$scope.next=function(){
	
	if($scope.ind<$scope.slider.length-1){
		$scope.ind++;
	}
	else{
		$scope.ind=0;
	}	
	
};

$scope.prev=function(){
	if($scope.ind>0){
		$scope.ind--;
	}
	else{
		$scope.ind=$scope.slider.length-1;
	}	
		
	
	
};




});

