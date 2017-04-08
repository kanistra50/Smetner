/**
 * The main app module
 *     with Routing
 */
var module = angular.module("test", ['ui.router', 'storeService']);

module
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/list');

        $stateProvider
            .state('list', {
                url: '/list',
                template: '<div dir-list>Directive</div>'
            })
            .state('add', {
                url: '/list/add',
                template: '<div dir-form>Directive</div>'
            })
            .state('edit', {
                url: '/list/edit/:{itemId}',
                template: '<div dir-form>Directive</div>'
            });
    }])
