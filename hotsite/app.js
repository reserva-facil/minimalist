require('../index.js') // main file of minimalist
require('../angular.js') // directives

angular.module('app', [
  'minimalist',
])

angular
  .module('app')
  .controller('HomeController', HomeController)

function HomeController() {
  this.name = 'darlan'
  this.houses = ['stark', 'lannister', 'targaryen']
  this.restricoesAgrupadas = []
  // this.houses = 'stark'
  this.number = 10
  this.numbers = [10, 20, 30, .5]
  this.openDialog = openDialog

  function openDialog() {
    const dialog = document.querySelector('mn-dialog#restricoesAgrupadas')
    dialog.setCloseClickOutside(true)
    dialog.open()
  }

}

angular
  .module('app')
  .directive('housesSearch', HousesSearchDirective)

function HousesSearchDirective() {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes) {

      element.bind('search', search)

      function search(event) {
        const params = new URLSearchParams()
        params.append('query', event.query)
        const houses = new Request(`http://localhost:4000/houses`)

        event.target
          .fetch(houses)
          .then(response => response.json())
          .then(setOptions)

        function setOptions(response) {
          const houses = response

          houses.forEach(house => {
            const option = document.createElement('option')
            option.textContent = house
            option.setAttribute('value', house.toLowerCase())

            event.target.appendChild(option)
          })
        }
      }
    }
  }
}
