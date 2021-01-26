$(document).ready(function(){
  $("#btn").click(function() {
    let a = $("#firstname").val();
    let b = $("#lastname").val();
    let c = $("#color").val();
    let d = $("#fontsize").val();
    
    $("#data_table").append("<tr data-name='"+a+"''><td><input type='checkbox' name='chkbox' id='chkbox'></td><td><input type='text' value='"+a+"' style='background-color:"+c+";font-size:"+d+"' disabled></td><td><input type='text' value='"+b+"' style='background-color:"+c+";font-size:"+d+"' disabled></td><td><input type='button' value='Edit' style='background-color:green;'></td><td><input type='button' id='deleteRow' value='Delete' style='background-color:red;'></td></tr>");
    
    
    $("#firstname").val("");
    $("#lastname").val("");
    $("#color").val("");
    $("#fontsize").val("");
    $("#defaultRow").css("visibility","visible");
  });
});

$('body').on('click','#deleteRow',function() {
  console.log("hht");
  $(this).parents('tr').remove();
});