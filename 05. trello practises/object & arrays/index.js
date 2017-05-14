

var cottages = [

  apartment = {
    price: 500,
    location: 'Devon',
    sleeps: 4,
    rating: 4.5
  },
  apartment = {
    price: 900,
    location: 'Cornwall',
    sleeps: 3,
    rating: 4.7
  },
  apartment = {
    price: 600,
    location: 'Somerset',
    sleeps: 7,
    rating: 3.8
  }

];

var showLow  = document.getElementById('low');
var showHigh = document.getElementById('high');
var show = document.getElementById('show');


showLow.addEventListener("click", function() {
  // sort low - high
  cottages.sort(function(a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
  });
  console.log('lowest to high');
});

showHigh.addEventListener("click", function() {
  // sort high - low
  cottages.sort(function(a, b) {
      return parseFloat(b.price) - parseFloat(a.price);
  });
  console.log('highest to low');
});


show.addEventListener("click", display);

function display() {
  for (var i = 0; i < cottages.length; i++) {
    var price = cottages[i].price;
    var location = cottages[i].location;
    console.log(price, location);
  }
}
