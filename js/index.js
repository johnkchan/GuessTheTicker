$(document).ready(function(){

  // $.ajax({
  //   url: 'https://api.iextrading.com/1.0/ref-data/symbols',
  //   method: "GET"
  // }).done(function(response){
  //
  //   // Populate tickerSymbol with random ticker symbol
  //   var i = Math.floor(Math.random() * response.length);
  //   $("#tickerSymbol").text("$" + response[i].symbol);
  //   $("#companyName").text(response[i].name);
  // });

  function getStockTicker(){
    var i = Math.floor(Math.random() * f500Tickers.length);
    $("#tickerSymbol").text("$" + f500Tickers[i]);
    $("#companyName").text(f500Companies[i]);
    $("#companyIndustry").text("Industry: " + f500Industry[i]);
    $("#companySubIndustry").text("Sub-Industry: " + f500SubIndustry[i]);
    $("#companyAddress").text("Headquarters: " + f500Address[i]);
  }

  getStockTicker();

  // Bid Enter Key to Submit Guess Button
  $('body').on('keypress', 'input', function(args) {
    if (args.keyCode == 13) {
        $("#submitGuess").click();
        return false;
    }
});
  $("#submitGuess").on("click", function(){
    var currentScore = parseInt($("#currentScore").text());
    var highScore = parseInt($("#highScore").text());
    var tickerGuess = $("#tickerGuess").val().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");

    // if ($("#tickerGuess").val() === ""){
    //   return;
    // }

    if (tickerGuess == $("#companyName").text().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/ Corporation| Corp| Company| Holdings| Inc| Ltd| Plc| Co/i, "")){
      currentScore += 1;
      $("#currentScore").text(currentScore);
      if (currentScore > highScore) {
        $("#highScore").text(currentScore);
      }
    } else {
      currentScore = 0;
      $("#currentScore").text(currentScore);
    }
    getStockTicker();
    $("#tickerGuess").val("");
  });

})
