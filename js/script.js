function pingpong(number) {

  return number;
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
