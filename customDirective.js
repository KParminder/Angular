
//An isolate scope is a separate scope object tied to the directive. Here is how you define it in the directive definition object:


myapp.directive('userinfo', function() {
    var directive = {};

    directive.restrict = 'E';

    directive.template = "User : {{user.firstName}} {{user.lastName}}";

    directive.scope = {
        user : "=user"
    }

    return directive;
})