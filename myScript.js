let counter = 0;
let realNumber = Math.floor((Math.random() * 100) + 1);

document.getElementById("checking").addEventListener("click", function() {
    checkNum();
});

document.getElementById("Guess").addEventListener("keyup" , function (event) {
      if (event.keyCode === 13) {
        checkNum();
      }

});


document.getElementById("Guess").focus();

function checkNum() {
    counter++;
    document.getElementById("count_num").innerHTML= "This is your test number:" + counter;
    let Guess1 = document.getElementById("Guess").value;
    if(Guess1 == realNumber){
        alert("You are the winner :D. "+"You guest after "+ (counter--) +" times!");
        var new_game = confirm("You wanna play again?");
        if (new_game == true){
            realNumber = Math.floor((Math.random() * 100) + 1);
            counter=0;    
            document.getElementById("output").innerHTML="";
            document.getElementById("count_num").innerHTML="";
        }
        else {
            document.getElementById("count_num").innerHTML=""; 
            document.getElementById("output").innerHTML="Thanks for game!";
     
    }
  }
    else if(Guess1 == "") {
        document.getElementById("output").innerHTML="Please Enter Number";       
    }
    else if(Guess1.indexOf(',') != -1 || Guess1.indexOf('.') != -1){
        document.getElementById("output").innerHTML="This is NOT a natural number";
     }
    else if(Guess1 > realNumber){
        document.getElementById("output").innerHTML="I am thinking about lower number";
      }
    else if(Guess1 < realNumber) { 
        document.getElementById("output").innerHTML="I am thinking about higher number";
      }
    else if(isNaN(Guess1)){
        document.getElementById("output").innerHTML="Are you sure that this is a number?";
      }

document.getElementById("Guess").value='';
    
}



