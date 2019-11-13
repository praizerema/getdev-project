$(function() {
  $("#myform").submit(function(e) {
    e.preventDefault();
      var womanName = $("#womanName").val();
      var womanEmail = $("#womanEmail").val();
      var womanSize = $("#womanSize").val();
      var womanBrand = $("#womanBrand").val();
      var womanColor = $("#womanColor").val();
      var womanComp = $("#womanComp").val();
      var amount = $("#amount").val();
     
      console.log(womanName);
      console.log(womanEmail);
      console.log(womanSize);
      console.log(womanBrand);
      console.log(womanColor);
      console.log(womanComp); 
      console.log(amount);
alert("Your order has been submitted successfully");
  
       window.location.reload()
    });
      $("#myform1").submit(function(e) {
        e.preventDefault();
            var manName = $("#manName").val();
      var manEmail = $("#manEmail").val();
      var manSize = $("#manSize").val();
      var manBrand = $("#manBrand").val();
      var manColor = $("#manColor").val();
      var manComp = $("#manComp").val();
      var amount1 = $("#amount1").val();
      console.log(manName);
      console.log(manEmail);
      console.log(manSize);
      console.log(manBrand);
      console.log(manColor);
      console.log(manComp);
      console.log(amount1);
      alert("Your order has been submitted successfully");
        window.location.reload()
  });
});


 
