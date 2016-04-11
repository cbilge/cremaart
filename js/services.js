var cremaServices = angular.module('cremaServices', ['ngResource']);

cremaServices.factory('cremaData', ['$resource', function ($resource) {
    return $resource("/js/data/data.php?source=:src", {source:'@src'});
} ]);