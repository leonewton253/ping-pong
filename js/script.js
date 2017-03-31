function pingpong(number) {
if ((number/3)%1 === 0) {
  return "Ping"
}
}

$(document).ready(function(){
  $("#input-form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var result = pingpong(userInput);
    $("#display_text").text(result);
    $("#output").show();
  });
});
