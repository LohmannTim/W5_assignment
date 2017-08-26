myApp.service('ListingService', ['$http', function($http){
    console.log('Listing service loaded');
    
    var self = this;
    self.gottenlisting = { list: [] };

    self.getListing = function() {
        $http.get('/listing').then(function(response) {
            self.gottenlisting.list = response.data;
            console.log('get response:', self.gottenlisting);
            
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