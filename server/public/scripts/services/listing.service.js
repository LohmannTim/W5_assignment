myApp.service('ListingService', ['$http', function($http){//instantiating a new service, naming it, and declaring its dependencies.
    console.log('Listing service loaded');
    //$http is an object that allows us to bring in the tools to do gets, posts, etc and make calls to the routes
    var self = this;
    self.listings = { list: [] };//preparing an object to be consumed by controller

    self.getListing = function() {
        $http.get('/listing').then(function(response) {//response is instantiated in to the object 'self'
            self.listings.list = response.data; //this is the data being returned with/as response
            console.log('get response:', self.listings);
            
        });
    };

    self.addListing = function(newListing) {
        console.log('sending this object to server', newListing);
        $http.post('/listing', newListing).then(function(response) {
            console.log('service post response: ', response);
            self.getListing();   
        });  
    };

    self.getListing();
}]);

// console.log('listing service loaded')