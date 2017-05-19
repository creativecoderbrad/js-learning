
var find = document.getElementById('myInput')
find.addEventListener('keyup', myFunction);

function myFunction() {
    var input  = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("myUL");
    var li = ul.getElementsByTagName("li");


    for (var i = 0; i < li.length; i++) {

        // each a tag
        var a = li[i].getElementsByTagName("a")[0];

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        }
        else {
            li[i].style.display = "none";
        }
    }
}
