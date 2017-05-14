
var items = [
  { name: 'Edward', value: 21 },  { name: 'Sharpe', value: 37  },
  { name: 'And', value: 45 },     { name: 'The',    value: -12 },
  { name: 'Magnetic', value: 13 },{ name: 'Zeros',  value: 37  }
];

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toLowerCase(); // ignore upper and lowercase
  var nameB = b.name.toLowerCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});

for (var i = 0; i < items.length; i++) {

  var name = items[i].name.toLowerCase();

  console.log(name);

}



//
