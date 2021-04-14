$(document).ready(function(){

    var count = 5;
  
    var html = "";
    for(i=1;i<=count;i++)
    {
      html += "<div class='card'>card " + i +"</div>";
      html += "<br>";
    }
    $("#ni").append(html);
  
});