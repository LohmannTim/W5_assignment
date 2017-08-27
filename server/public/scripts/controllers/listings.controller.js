myApp.controller('ListingController', //give myApp.controller the name of 'ListingController'
    ['ListingService', //array listing dependencies and the last item of the array calls it all up
        function (ListingService) {
            console.log('Listing Controller loaded');

            var self = this; //building an object to be displayed on the DOM 
            self.newListing = {};
            ListingService.getListing();
            self.listings = ListingService.listings;

            self.addListing = function () {
            ListingService.addListing(self.newListing)
            }


        }
    ]);