myApp.service('RentalService', ['$http', function($http){
    console.log('Rental service loaded');
    
    var self = this;
    self.rentals = { 
        list: [] 
    };
    self.getRental = function() {
        $http.get('/rentals').then(function(response) {
            self.rentals.list = response.data;
            console.log('get response:', self.rentals);    
        });
    };
    self.addRental = function(newRental) {
        console.log('sending this object to server', newRental);
        $http.post('/rentals', newRental).then(function(response) {
            console.log('service post response: ', response);
            self.getRental();
        });
        
    };

    











}]);