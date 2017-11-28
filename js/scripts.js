$(document).ready(function() {
    $("form#triangle").submit(function(event) {
        var AB = parseInt($("input#AB").val());
        var BC = parseInt($("input#BC").val());
        var CA = parseInt($("input#CA").val());


      if (AB === BC && BC === CA && CA === AB) {
        $("#equilateral").show();

          }

     else if(AB === BC ||BC === CA || CA === AB) {

       $("#isosceles").show();
       $("button#btn").click(function()

     }
     else {
      $("#scalene").show();

       }

      event.preventDefault();
      
    });
  });
