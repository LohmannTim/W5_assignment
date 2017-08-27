myApp.controller('RentalController', //give myApp.controller the name of 'RentalController'
['RentalService',//array listing dependencies and the last item of the array calls it all up
    function (RentalService) {
        console.log('Rental Service loaded');

        var self = this;
        self.newRental = {};
        RentalService.getRental();
        self.rentals = RentalService.rentals;
        
        self.addRental = function() {
            RentalService.addRental(self.newRental)
        }

        
    }
])