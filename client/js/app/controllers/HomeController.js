function HomeController(states, $scope) {
  //stories contains each story returned from http get within stories.data
      // Do stuff with your $scope.
      // Note: Some of the directives require at least something to be defined originally!
      // e.g. $scope.markers = []

      // uiGmapGoogleMapApi is a promise.
      // The "then" callback function provides the google.maps object.

  var ctrl = this;
  ctrl.states = states.data
}

angular
  .module('app')
  .controller('HomeController', HomeController)
