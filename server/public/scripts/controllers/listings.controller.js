myApp.controller('ListingController', //give myApp.controller the name of 'ListingController'
['ListingService',//array listing dependencies and the last item of the array calls it all up
    function (ListingService) {
        console.log('Listing Controller loaded');

        var self = this;
        // self.newListing = {};
        // ListingService.getListing();
        self.gottenListing = ListingService.gottenListing;
        
        // self.addListing = function() {

        // }

        
    }
]);