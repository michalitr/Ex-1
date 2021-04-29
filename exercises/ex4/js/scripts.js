$(document).ready(function() {
	var q;
	var a;
	$("#random").on("click", function()
    {
      var qArray = getQuote();
      q = qArray[0];
      a = qArray[1];
      $(".message").html("" + q);
      $("#author").html("- " + a);
    });
	
	$("#tweet").on("click", function(){
			window.open(
      "http://twitter.com/home?status=\"" + q + "\" -" + a);
		});
});

var quotes = [];
quotes.push(["Sometimes the right path is not the easiest path.", "Pocahontas"]);
quotes.push(["Don't just fly, soar.", "Dumbo"]);
quotes.push(["It will turn out alright in the end. You'll see.", "Mrs. Potts"]);
quotes.push(["You're mad. Bonkers. I'll tell you a secret... All the best people are.", "Alice in Wonderland"]);
quotes.push(["All of our dreams can come true if we have the courage to pursue them.", "Walt Disney"]);
quotes.push(["Life is a journey to be experienced, not a journey to be solved.", "Winnie the Pooh"]);
quotes.push(["The past can hurt. But, the way I see it, you can either run from it or learn from it.", "Rafiki"]);
quotes.push(["It's kind of fun to do the impossible.", "Walt Disney"]);
quotes.push(["Who says we have to grow up?", "Walt Disney"]);
quotes.push(["Ladies don't start fights, but we can finish them.", "Marie"]);

function getQuote() {
  var num = Math.floor(Math.random() * 10);
  return quotes[num];
}


function validInputs() {
  var msg = "";
  var value = document.forms["signup-form"]["fullName"].value;
  if (value==""){
      msg = "Character name is required";
      document.getElementById("errormsg").innerHTML = msg;
      return false;
  }
  if (value.indexOf(" ")==-1||value.length<3) {
      msg="Character name must have least one space!\n";
      document.getElementById("errormsg").innerHTML = msg;
      return false;
  }
  value = document.forms["signup-form"]["pass"].value;
  if (value.length<8 ) {
      msg="Password have to contain at least 8 charcters!\n";
      document.getElementById("errormsg").innerHTML = msg;
      return false
  }

  value = document.getElementsByName("interests[]");
  value = value[0].checked+value[1].checked+value[2].checked+value[3].checked;
  console.log(value);
  if (value == 0){

      msg="must check one interest!\n";
      document.getElementById("errormsg").innerHTML = msg;
      return false
  }

  value = document.forms["signup-form"]["phone"].value;
  if (value.length>10 || value.length<9 || isNaN(value)) {
      msg="Phone is between 9 to 10 digits without charcters!\n";
      document.getElementById("errormsg").innerHTML = msg;
      return false
  }

  return true;
};

  document.getElementsByClassName("iframeAudio")[0].play();
