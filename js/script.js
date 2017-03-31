var listLimit_array = []

function pingpong(number) {
listLimit_array.forEach(listLimit_array.push(number))

if ((number/3)%1 === 0) {
  return "Ping";
} else {
  return number;
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
