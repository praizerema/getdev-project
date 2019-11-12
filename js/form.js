$(function() {
  $("#myform").submit(function(e) {
    e.preventDefault();
      var womanName = $("#womanname").val();
      var womanemail = $("#womanemail").val();
      var womansize = $("#womansize").val();
      var womanbrand = $("#womanbrand").val();
      var womancolor = $("#womancolor").val();
      var womancomp = $("#womancomp").val();
      var amount = $("#amount").val();
      console.log(womanname);
      console.log(womanemail);
      console.log(womansize);
      console.log(womanbrand);
      console.log(womancolor);
      console.log(womancomp); 
      console.log(amount);
       window.location.reload()
    });
      $("#myform1").submit(function(e) {
        e.preventDefault();
            var manname = $("#manname").val();
      var manemail = $("#manemail").val();
      var mansize = $("#mansize").val();
      var manbrand = $("#manbrand").val();
      var mancolor = $("#mancolor").val();
      var mancomp = $("#mancomp").val();
      var amount1 = $("#amount1").val();
      console.log(manname);
      console.log(manemail);
      console.log(mansize);
      console.log(manbrand);
      console.log(mancolor);
      console.log(mancomp);
      console.log(amount1);
        window.location.reload()
  });
});


 
