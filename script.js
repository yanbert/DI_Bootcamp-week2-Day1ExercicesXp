//exercice1
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

let foodFavorite="chocolat";
let PLATpreferé="diner";
console.log( `je mange du ${foodFavorite} à ${PLATpreferé} `);
/****************************************************************************************************************** */
// Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

let cTemp = 37;
let cToFahr = cTemp * 9 / 5 + 32;
let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
  console.log(message);
  /****************************************************************************************************************** */
//  Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

     let c;
    let a = 34;
    let b = 21;
    
    console.log(a+b) //first expression
    // Prediction: le resultat donne 55  car  34 et 1 sont des nombre
    // Actual:55

    
    a = 2;
    console.log(a+b) //second expression
    // Prediction: le resultat donne 23  car  2 et 21 sont des nombre
    // Actual:23
      
    // let c;
    //  resultat de 
    //prediction : c'est un resultat indefined ,car la variable est declaré mais n'est pas affecté

    // 4
    console.log(3 + 4 + '5');
     // Prediction: le resultat donne 75  car  3et 4 sont des nombre qui a été concatené avec 5 
    // Actual:75
    /****************************************************************************************************************** */
   //Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


   typeof(15)
   // Prediction: un nombre
  // Actual: number
  typeof(5.5)
  // Prediction: un nombre
  // Actual: number
  typeof(NaN)
  // Prediction:le resultat est not
  // Actual:String
  typeof("hello")
// Prediction:un mot 
// Actual:string
typeof(true)
// Prediction:cela renvoi vrai
// Actual:boolean

typeof(1 != 2)
// Prediction: le resultat donnera vrai car un est différent de 2
// Actual:boolean

"hamburger" + "s"
// Prediction: le resultat est un mot car nous voyons deux deux chaine concatener
// Actual:hamburgers

"hamburgers" - "s"
// Prediction: cela va nous renvoyer NaN ,qui veut ses chaine ne sont pas des numéro (car c'est sur les numner on peux effectuer des opérations)
// Actual:NaN(not is number)

"1" + "3"
// Prediction: ce resultat nous donnerz 13 car 4 et 3 sont des nombres
// Actual:13

"1" - "3"
// Prediction: le resultat donnera -2 car 1 et 3 sont des nombres 
// Actual:-2

"johnny" + 5
// Prediction: ce resultat nous donnera johnny5 car nous avons concatener johnny  qui est un string et 5 un number 
// Actual:johnny5

"johnny" - 5
// Prediction: le resultat ne donnera rien car johnny n'est pas un number pour faire l'opération
// Actual:NaN(not si number)

99 * "hello"
// Prediction:le resultat ne donnera rien car hello n'est pas un number pour faire l'opération
// Actual:NaN

1 != 1
// Prediction: le resultat est faux car 1 n'est pas different de 1
// Actual: fasle

1 == "1"
// Prediction: le resultat est vrai car on faire la comparaison de deux nombre
// Actual:true

1 === "1"
// Prediction: le resultat donner false car ici normalement on doit comparer un number et un type or ici nous avons deux number
// Actual:false fasle
/****************************************************************************************************************** */

// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


5 + "34"
// Prediction: le resulat sera 39 car nous avons concatener deux nombres
// Actual:39

5 - "4"
// Prediction: le resultat sera 1 car 5 et 4 sont des nombres
// Actual:1

10 % 5
// Prediction: le resultat est 0  c'est le modulo de 10%5
// Actual:0

5 % 10
// Prediction: sa faire 5 car sait le modulo de  de 5% 10
// Actual:5

"Java" + "Script"
// Prediction: le resultat donnera  javascript car java et script sont deux string ,nous avions concatener ces deux chaîne
// Actual:javascript

" " + " "
// Prediction:pas de resultat
// Actual:l'opération ne donne pas de resultat

" " + 0
// Prediction: le resultat est 0 car 0 est un nombre
// Actual:0

true + true
// Prediction: le resultat est 2 car true veux dire 1, ce qui veux dire on a faire l'addition de ddeux true
// Actual:2

true + false
// Prediction: le resultat donnera 1 car on true donne 1 et false 0 ,donc l'addition de  1 et 0 donne 1
// Actual: 1

false + true
// Prediction: le resultat donnera 1 car on true donne 1 et false 0 ,donc l'addition de  1 et 0 donne 1
// Actual: 1

false - true
// Prediction: le resultat donnera -1 ,car fasle donne 0 et true 1 d'oû 0-1 egale -1
// Actual:-1

!true
// Prediction: le resultat est false qui est un boolean  et aussi true aussi est un boolean qui ne peut pas est differernt 
// Actual:false

3 - 4
// Prediction: le resultat donnera -1  et 3 et 4 sont des nombres
// Actual:-1

"Bob" - "bill"
// Prediction:le resultat  donnera  rien ,car bob et bill ne sont pas des number
// Actual:NaN

//****************************************************************************************************************** */

// Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.


// part 1

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence =" black panther,avangers,terminatore";
 console.log(`j'ai regardé ${myWatchedSeriesLength}   film:${myWatchedSeriesSentence}`);
// part2
myWatchedSeries[2]= "freind";
myWatchedSeries.push("DragonBALz");
myWatchedSeries.unshift("wakanda");
delete myWatchedSeries[0];
console.log(myWatchedSeries[2][2]);
console.log(myWatchedSeries);

