console.log("Connected!")

$( document ).ready(function() {
//Setting an alert for the div, but a button is within it too with an alert, so this is called event bubbling--don't do this!
$('#container').on('click', function () {
  alert('You clicked the container div!')
})
//Let's  make the button react to a click
//event.stopPropagation() will avoid event bubbling! We get the button's you clicked me alert, not the container alert.
$('#myBtn').on('click', function(){
  alert('You clicked me!')
  event.stopPropagation()
})
// Pairing activity: Add to the lists on HTML
$('#drinks').append('<li>Rum and Coke</li> <li>Tequila</li> <li>Coca-Cola</li>')
$('#foods').append('<li>Tacos</li> <li>Chilaquiles</li> <li>Tortas</li>')
// Another (fancy for loop) way to add to the lists on HTML:
// var foods = ['burgers', 'fries', 'pasta', 'shrimp', 'sushi']
//
// for (var i = 0; i < foods.length; i++) {
//   $('#foods').append('<li>' + foods[i] + '</li>')
// }
// Yet another way: using forEach method (check if this is correct)
//
// foods.forEach(function(food) {
//   $('#foods').append('<li>' + foods + '</li>')
// })
// input button that will allow you to add something to your list (and then makes input blank after clicking submit:)
$('#addFood').on('click', function() {
  var newFood = $('#foodInput').val()
  if (newFood != '') {
    $('#foods').append('<li>' + newFood + '</li>')
  $('#foodInput').val('')
  }
})
// Another way to do the above:
// $('<li />', {html: newFood}).appendTo('ul#foods')
// })

// Note: val() is the only way to access what's in the input
$('#addDrink').on('click', function() {
  var newFood = $('#drinkInput').val()
  if (newFood != '') {
    $('#drinks').append('<li>' + newFood + '</li>')
  $('#drinkInput').val('')
  }
})
// Other events, here is keydown:
$('#typeHere1').on('keydown', function() {
  alert("keydown worked!")
  // }
  // keypress:
  $('#typeHere2').on('keypress', function() {
    alert("keypress worked!")
    })
    // keyup:
    $('#typeHere3').on('keyup', function() {
      alert("keyup worked!")
    })
    // mouseover:
    $('#test4').on('mouseover', function() {
      alert("mouseover worked!")
    })

})
//
