
/////////////// business logic ////////////////////////
function add (number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function majorChord(startingNote) {
	var startingNote = parseInt($("#startingNote")val());
  var noteNumber = parseInt(startingNote) % 12;
  var thirdNumber = noteNumber + 4;
  var fifthNumber = noteNumber + 7;
  return "Root: " + noteNumber + "\nThird: " + thirdNumber + "\nFifth: " + fifthNumber;
}

////////////////user interface ///////////////

$(document).ready(function() {


	$(".numberInput").submit(function(event){
		event.preventDefault ();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		// debugger;
		// alert(add(number1, number2));
		$("#result-label").text(result)

	});

});

// alert(add(number1, number2));
//alert(majorChord(number1));
// alert(subtract(number1, number2));
// alert(multiply(number1, number2));
// alert(divide(number1, number2));
