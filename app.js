//If you need to do something more advanced inside your directive, something that you cannot do with an HTML template, you can use the compile() and link() ////functions instead.

//The compile() and link() functions define how the directive is to modify the HTML that matched the directive.

//The compile() function is called once for each occurrence of the directive in the HTML page. The compile() function can then do any one-time configuration needed //of the element containing the directive.

//The compile() function finishes by returning the link() function. The link() function is called every time the element is to be bound to data in the $scope object.

//As mentioned, you add the compile() function to the directive definition object, and the compile() function has to return the link() function when executed. Here is how that looks:
<script>
myapp = angular.module("myapp", []);
myapp.directive('userinfo', function() {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */


    directive.compile = function(element, attributes) {
        // do one-time configuration of element.

        var linkFunction = function($scope, element, atttributes) {
            // bind element to data in $scope
        }

        return linkFunction;
    }

    return directive;
});    
//Here is a full example that shows a directive that uses both a compile() and link() function:
<div ng-controller="MyController" >
    <userinfo >This will be replaced</userinfo>
</div>

<script>
    myapp = angular.module("myapp", []);
    myapp.directive('userinfo', function() {
        var directive = {};

        directive.restrict = 'E'; /* restrict this directive to elements */

        directive.compile = function(element, attributes) {
            element.css("border", "1px solid #cccccc");

            var linkFunction = function($scope, element, attributes) {
                element.html("This is the new content: " + $scope.firstName);
                element.css("background-color", "#ffff00");
            }

            return linkFunction;
        }

        return directive;
    })
    myapp.controller("MyController", function($scope, $http) {
        $scope.cssClass = "notificationDiv";

        $scope.firstName = "Jakob";

        $scope.doClick = function() {
            console.log("doClick() called");
        }
    });
</script>      