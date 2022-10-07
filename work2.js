var  userChoice, randomNumber, computerChoice;
var userChoice = prompt("Heads Or Tails");
var randomNumber= Math.round(Math.random());
if(randomNumber=0){
    var computerChoice=("heads");
}else{
    var computerChoice=("tails");
};
if (computerChoice==userChoice){
    console.log('You guessed right! The coin flip landed on'+computerChoice)
}else{
    console.log('Sorry, the coin flip landed on'+computerChoice)
};

var birthYear =prompt('What Is Your Birth Year');
var age = birthYear-2022;
if(age>21){
    alert('You are old enough to drink in the US');
}else if(age==21){ 
    alert('You are old enough to drink in the US...barely')
}else{
    alert("Sorry, you are not old enough to drink in the US")
}
