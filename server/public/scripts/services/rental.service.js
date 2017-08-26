myApp.service('RentalgService', ['$http', function($http){
    console.log('Rental service loaded');
    
    var self = this;
    self.gottenrental = { list: [] };

    self.getRental = function() {
        $http.get('/rental').then(function(response) {
            self.gottenrental.list = response.data;
            console.log('get response:', self.gottenrental);    
        });
    };

    self.addRental = function(newRental) {
        console.log('sending this object to server', newRental);
        $http.post('/listing', newRental).then(function(response) {
            console.log('service post response: ', response);
            self.getRental();
        });
        
    };

    











}]);