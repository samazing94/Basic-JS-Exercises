/* ---------------------------

*** #1 Percentage ***

Write a JavaScript function to calculate the percentage (%) of a given number.

Test:
console.log(percentage(2000, 37.12));

Output:
742.4

 --------------------------- */

function percentage(number, percentage) {
  return number * (percentage/100);
}
console.log("Percentage Calculator:");
/* Uncomment the following to check */
   console.log(percentage(2000, 37.12));
   console.log(percentage(450, 56.5));
   console.log(percentage(5230, 34));




/* ---------------------------

*** #2 Rotate String ***

Rotate a given string in the right direction by periodically removing
one letter from the end of the string and attaching it to the front.

Test:
rotateString("cat");

Output:
cat
tca
atc
cat

HINT: Use substring()
 --------------------------- */

function rotate_string(text) {
  for(var i = 0; i < text.length; i++)
  {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    console.log(text);
  }

}

console.log("Rotate String:");
/* Uncomment the following to check */
  rotate_string("cat");
  rotate_string("voracious")




/* ---------------------------

*** #3 Remove First Occurence ***

Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

Test:
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

Output:
"The quick brown fox jumps over lazy dog"

HINT: Use indexOf() and slice()

 --------------------------- */

function remove_first_occurrence(text, searchstring) {
  var txt = text;
  var cut = text.indexOf(searchstring);
  console.log(cut, 34);
  var cutR = txt.slice(0, cut) + txt.slice(34, txt.length);
  return cutR;
}

console.log("Remove First Occurrence:");
/* Uncomment the following to check */
  console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));




/* ---------------------------

*** #4 Alphabetical Order ***

Write a JavaScript function that returns a passed string with letters in alphabetical order.

Test:
console.log(alphabetic_order('webmaster'));

Output:
abeemrstw

HINT: Use join(), split() and sort() fucntions
 --------------------------- */

function alphabetic_order(word) {
  
  var splits = word.split("");
  var a_char = splits.sort();
  return a_char.join("");
}

console.log("Alphabetic Order:");
/* Uncomment the following to check */
  console.log(alphabetic_order("webmaster"));




/* ---------------------------

*** #5 Most Frequent Item ***

Write a JavaScript function to find the most frequent item in a given array.

Test:
most_frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

Output:
a occurs 5 times

 --------------------------- */

function most_frequent(arr) {
	var most_freq = 1;
	var f = 0;
	var item;
	for (var i = 0; i < arr.length; i++)
	{
		for (var j = 0; j < arr.length; j++)
		{
			if (arr[i] == arr[j+1])
			{
				f++;
			}
			if (most_freq  < f)
			{
				most_freq = f;
				item = arr[i];
			}
		}
		f = 0;
	}

  console.log( item + " occurs " + most_freq + " times");
}

console.log("Most Frequent Item:");
/* Uncomment the following to check */
   most_frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);




/* ---------------------------

*** #6 FizzBuzz ***

Write a JavaScript function which iterates the integers from 1 to n.
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".

Test:
fizzbuzz(16);

Output:
  1
  2
  3 Fizz
  4
  5 Buzz
  6 Fizz
  7
  8
  9 Fizz
  10 Buzz
  11
  12 Fizz
  13
  14
  15 FizzBuzz
  16

 --------------------------- */

function fizzbuzz(n) {

	for(var i = 0; i < n; i++)
	{
		if(i%5 === 0 && i%3 === 0){
			console.log("FizzBuzz");
		}
		else if (i % 3 === 0) {
			console.log("Fizz");
		}
		else if (i % 5 === 0) {
			console.log("Buzz")
		}
		else {
			console.log(i);
		}
	}
}

console.log("FizzBuzz:");
/* Uncomment the following to check */
   fizzbuzz(100);




/* ---------------------------

*** #7 Guessing Game ***

Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched"

HINT: Use Math.ceil() and Math.random()

 --------------------------- */

function guessing_game(guess) {
  // Get a random integer from 1 to 10 inclusive
  var num = Math.ceil(Math.random() * 10);
  if (guess == num)
  {
  	console.log("Good Work");
  }
  else {
  	console.log("Not matched");
  }
}

console.log("Guessing Game:");
/* Uncomment the following to check */
   var guess = prompt('Guess the number between 1 and 10 inclusive');
   console.log("User guessed: "+ guess);
   guessing_game(guess);
