var cremaControllers = angular.module('cremaControllers', ['ngSanitize']);

cremaControllers.controller('HomeController', ['$scope', 'cremaData', function ($scope, cremaData) {
    $scope.design = cremaData.get({ source: 'design' });
    $scope.shop = cremaData.get({ source: 'shop' });


    $scope.classTags = function (tags) {
        console.log(tags);
        switch (tags) {
            case "new":
                return "label label-default label-new";
                break;
            case "hot":
                return "glyphicon glyphicon-fire hotglyph";
                break;
            default:
                return "";
        };
    };

    $scope.htmlTags = function (tags) {
        switch (tags) {
            case "new":
                return "NEW";
                break;
            default:
                return "";
        };
    };

} ]);