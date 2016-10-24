'use stict'

const app = angular.module(`cameraShop`, [])

app.controller(`CartController`, [`$scope`, $scope => {
  $scope.cameras = [{
      title: `Nikon D3100 DSLR`,
      image: `http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg`,
      rating: 3.4,
      price: 369.99,
      onSale: true
    }, {
      title: `Canon EOS 70D`,
      image: `http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg`,
      rating: 2.0,
      price: 1099.0,
      onSale: false
    }, {
      title: `Nikon D810A`,
      image: `http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg`,
      rating: 4.2,
      price: 3796.95,
      onSale: true
    }
  ]
  $scope.subtotal = 0
  $scope.tax = 0
  $scope.total = 0
  $scope.cart = []

  const taxRate = 0.08845

  const updateCost = () => {
    $scope.subtotal = 0

    for (let i = 0; i < $scope.cart.length; i++) {
      $scope.subtotal += $scope.cart[i].price
    }
    $scope.tax = $scope.subtotal * taxRate
    $scope.total = $scope.subtotal + $scope.tax
  }

  $scope.addToCart = camera => {
    $scope.cart.push(camera)
    updateCost()
  }
  $scope.removeItem = camera => {
    // update prices
    $scope.subtotal -= camera.price
    $scope.tax = $scope.subtotal * taxRate
    $scope.total = $scope.subtotal + $scope.tax

    // remove item from cart
    $scope.cart.splice($scope.cart.indexOf(camera), 1)
  }
}])
