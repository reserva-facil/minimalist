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
  // this.houses = ['stark', 'lannister', 'targaryen']
  this.casas = []
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
    restrict: 'A',
    require: 'ngModel',
    link(scope, element, attributes) {
      element[0].keyValue = 'nome'
      element.bind('search', search)

      function search(event) {
        const houses = [{'nome':'stark', 'valor':'stark'}, {'nome':'lannister', 'valor':'lannister'}, {'nome':'targaryen', 'valor':'targaryen'}]

        setOptions(houses)

        function setOptions(items) {
          items.forEach(item => {
            const option = document.createElement('option')
            // const value = item['valor']
            const value = JSON.stringify(item)

            option.textContent = item.nome
            option.setAttribute('value', value)

            event.target.appendChild(option)
          })
        }
      }
    }
  }
}
