var app = angular.module('myApp', []);

app.controller('Controller', function($scope) {
    $scope.loginShow = true;
    $scope.buttons = ["MailChimp", "Placeholder1", "Placeholder2", "Placeholder3"];
    $scope.user = "";
});
