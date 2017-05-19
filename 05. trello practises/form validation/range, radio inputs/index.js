
// search function
var submit = document.getElementById('myForm').addEventListener('submit', search);

// search input
var rangeinput = document.getElementById('range-btn');


function search(event) {

    // get latest individual input
    var range = rangeinput.value;


    console.log(range);
    // stop page submitting
    event.preventDefault();
}

// on each change
rangeinput.addEventListener("change", function() {

    // get latest individual input
    var range = parseInt(rangeinput.value);

    console.log(range);

});
