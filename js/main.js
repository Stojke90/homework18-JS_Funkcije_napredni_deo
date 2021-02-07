// Task 1
console.log("Task " + 1)
/* Create a constructor function for generating student objects. 
Each student object should have name, last name, age and average grade. */

function Students(name, lastName, age, averageGrade) {
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.averageGrade = averageGrade;
}

var mike = new Students("Mike", "Smith", 20, 8.2);
var peter = new Students("Peter", "Johnson", 21, 9.1);
var anne = new Students("Anne", "Williams", 19, 7.6);
var john = new Students("John", "Miller", 22, 10.0);

console.log(mike, peter, anne, john)


// Task 2 /////////////////////////////////////////////////////////////////////////////////////

console.log("Task " + 2)

/*Create a constructor function for generating objects with data about players of your favorite 
football team (name, age, goals scored, yellow cards). You can find statistics online.
*/


function Players(name, age, goalsScored, yellowCards, team) {
	this.name = name;
	this.age = age;
	this.goalsScored = goalsScored;
	this.yellowCards = yellowCards;
	this.team = team;
}

var cristianoRonaldo = new Players("Cristiano Ronaldo", 36, 67, 6, "Juventus");
var lionelMessi = new Players("Lionel Messi", 34, 213, 26, "Barselona");
var gianluigiBuffon = new Players("Gianluigi Buffon", 43, 0, 2, "Juventus");
var jordanHenderson = new Players("Jordan Henderson", 31, 16, 20, "Liverpool");
var lukaModric = new Players("Luka Modric", 36, 14, 29, "Real Madrid");

console.log(cristianoRonaldo, lionelMessi, gianluigiBuffon, jordanHenderson, lukaModric)


// Task 3 ////////////////////////////////////////////////////////////////////////////////////

console.log("Task " + 3)

/* Try to do the same thing as in the previous task, but when creating player objects try to do it 
dinammicaly (using loop). For that you'll need data in following format:
var players = [["Player name", 27, 12, 4], ["Player name", 27, 12, 4], ["Player name", 27, 12, 4]];
This array is just example, change data in this array with data of players you choose. */


var playersTask3 = [["Cristiano Ronaldo", 36, 67, 6, "Juventus"],
					["Lionel Messi", 34, 213, 26, "Barselona"],
					["Gianluigi Buffon", 43, 0, 2, "Juventus"],
					["Jordan Henderson", 31, 16, 20, "Liverpool"],
					["Luka Modric", 36, 14, 29, "Real Madrid"]];

function PlayersTask3(name, age, goalsScored, yellowCards, team) {
	this.name = name;
	this.age = age;
	this.goalsScored = goalsScored;
	this.yellowCards = yellowCards;
	this.team = team;
}

var newTeam = [];

for(var i = 0; i < playersTask3.length; i++) {
	newTeam[newTeam.length] = new PlayersTask3(playersTask3[i][0],
												  playersTask3[i][1],
													 playersTask3[i][2],
													    playersTask3[i][3],
														   playersTask3[i][4],)
}

console.log(newTeam)


// Task 4 ////////////////////////////////////////////////////////////////////////////////////////

console.log("Task " + 4)

/*Create a construction function that should contain properties for first number, second number, and 
method. Then create a four instances of object from that constructor, each with different numbers,and 
different method. First should have method for multiplying of its own numbers, second for dividing, 
third for adding and fourth for subtracting. */


function Calculator(firstNumber, secondNumber, resultat) {
	this.firstNumber = firstNumber;
	this.secondNumber = secondNumber;
	this.resultat = resultat;
}

function multiply () { 
	return this.firstNumber * this.secondNumber;
}
function dividing () { 
	return this.firstNumber / this.secondNumber;
}
function adding () { 
	return this.firstNumber + this.secondNumber;
}
function subtracting () { 
	return this.firstNumber - this.secondNumber;
}

var multiplying = new Calculator(8, 2, multiply);
var dividing = new Calculator(10, 2, dividing);
var adding = new Calculator(7, 3, adding);
var subtracting = new Calculator(19, 8, subtracting);

console.log(multiplying, dividing, adding, subtracting)
console.log(multiplying.resultat(), dividing.resultat(), adding.resultat(), subtracting.resultat())




// Task 5 //////////////////////////////////////////////////////////////////////////////////////////


console.log('Task ' + 5)

/* Test your understanding of closures and scope with following examples.
IMPORTANT! - First read 
the task and try to give an answer, 
and then copy the code to your file and check what do you get in console.*/



/*QUESTION 1:

	What’s the result of executing this code and why?

function test() {
	console.log(a);
	console.log(foo());
	var a = 1;

		   function foo() {
		      return 2;
		   }
}

test();*/

console.log('Odgovor na prvo pitanje: ' + "Resultat je number => 2 " + "Posle return propertija ni jedna dalje operacija ne moze biti izvrsena,u prvoj funkciji imamo dva console.log(),prva poziva vrednost varijable var a koja je napisana posle conosle.log(a),a potom pozivamo console.log(foo()) na funkciju iznutra koja nam vraca neku vrednost iz funkcije. Za varijablu var a dobicemo  undefinde jer nam se u javascriptu kod renderuje liniju po liniju,tj.ocitava linija po linija.")




//////////////////////////////////////////////////////////////////////////////////////////////


/*QUESTION 2:

What is result?

var a = 1; 

function someFunction(number) {
		  function otherFunction(input) {
		    return a;
		  }
		  
		  a = 5;
		  
		return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);*/

console.log("Rezultat drugog pitanja je:" + 5 + ". " + "Objasnjenje: " + "Iz unutrasnje funkcije vracamo vrednost a,vrednos a je definisana na globalnom nivou,i u tom trenutku je vrednost za var a = 1,medjutim,posle unutrasnje funkcije zadajemo novu vrednost za var a, a ona je sada 5.samim tim vrednost u unutrasnjj funkciji se menja jer vracamo unutrasnju funkciju posle zamene vrednosti varijable a,koja se sada vec 5.")



///////////////////////////////////////////////////////////////////////////////////////


/*
QUESTION 3:

What is the result of the following code? 

Explain your answer.

var fullname = 'John Doe';
var obj = {
		   
			fullname: 'Colin Ihrig',
		    prop: {
		      fullname: 'Aurelio De Rosa',
				getFullname: function() {return this.fullname;}
			}
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());*/

console.log("Rezultat treceg pitanja je:" + "Aurelio De Rosa,John Doe. " + "Objasnjenje: " + "console.log(obj.prop.getFullname()); ovako pozivamo funkciju koja se nalazi u property nekog objekta.ta funkcija vraca varijablu fullname,u ovom slucaju iz property prop.njegov fullname" + 
	"console.log(test()) nemam objasnjenje,ne razumem.....ovim iz objekta obj pozivamo njegov prop koji je objekat papozivamo telo funkcije.....zasto izlazi i obj i trazi na globalnom scope,kada ima u objektu fullname???ima veze sa kluzer ")




////////////////////////////////////////////////////////////////////////////////////////



/*QUESTION 4:

What will you see in the console for the following example?

var a = 1; 

function b() { 
		a = 10; 
		return;

			function a() {} 
}

b(); 
	
console.log(a);
*/

console.log("Rezultat cetvrtog pitanja je:" + 1 + ". " + "Objasnjenje: " + "U console.log stoji pozivanje varijale a,koja ima vrednost 1.Dok varijablu a koja je u funkciji ne moze biti pozvana na ovaj nacin jer je funkcija blok koji na sluzi da izolujem neki kod,varijablu unutar nje.")

