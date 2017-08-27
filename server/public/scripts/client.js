var myApp = angular.module('myApp', ['ngRoute']); //declares the variable.  calls in angular that we brought in through index.html

myApp.config(['$routeProvider', function ($routeProvider) { //angular route- client side routing
    console.log('route config loaded');
    $routeProvider.when('/', //when you hit '/' I want you to 
        {
            redirectTo: 'listings'
        } //redirect when hit the '/'
    ).when('/listings', { //this is defining everything we need
        templateUrl: 'views/listings.html', //provides template- use this part of html
        controller: 'ListingController', //calls the requested controller
        controllerAs: 'vm' //THIS IS THE WORM HOLE!!! vm means nothing, but is a parameter used to call client.js from index.html.  
    }).when('/rentals', {
        templateUrl: 'views/rentals.html',//see lines 9-12
        controller: 'RentalController',
        controllerAs: 'vm'
    });

}]);


console.log('myApp is loaded', myApp);