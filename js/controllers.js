var cremaControllers = angular.module('cremaControllers', ['ngSanitize']);

cremaControllers.controller('HomeController', ['$scope', 'cremaData', function ($scope, cremaData) {
    $scope.design = cremaData.get({ source: 'design' });
    $scope.shop = cremaData.get({ source: 'shop' });
    $scope.blog = cremaData.get({ source: 'blog' });

    $scope.classTags = function (tags) {
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

    $scope.getBlogImg = function (main_img) {
        if (typeof (main_img) == 'string') {
            return '/img/blog/' + main_img;
        }
        else {
            return '';
        }
    };

} ]);

app.filter('cutText', function () {
    return function (srcText, cutoff) {
        return srcText.substr(0, srcText.slice(cutoff).search(" ") + cutoff) + "...";;
    }

});