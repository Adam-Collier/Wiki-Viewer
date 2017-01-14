function search() {
  $('#search').on('keyup', function() {
    if ($(this).val().length == 0) {
      $(".blah").html("");
    }
  });
    var s = document.getElementById("search").value;
    $(".blah").html("");

    var s = document.getElementById("search").value;

    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + s + "&limit=10&profile=fuzzy", function(data) {

      var a = data[1];
      var b = data[2];
      var c = data[3]
      console.log(a);

      for (var x = 0; x < data[1].length; x++) {
        $(".blah").append("<li><a target = _blank href = " + c[x] + "><h1>" + a[x] + "</h1><h3>" + b[x] + "</h3></a><hr></li>");
      }
    });
  
}