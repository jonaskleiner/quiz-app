$(document).ready(function () {
	$("button").on("click", function () {
		console.log("click");
		var section = $(this).closest("section");
		section.prop("hidden", true);
		section.next().prop("hidden", false);
	});

	var answers = {
		q1: "e",
		q2: "c",
		q3: "d",
		q4: "e",
		q5: "d"
	};

}); // close jquery activate function


// only one answer selectable
// denote correct answers
// tally score
// display score

// user to answer questions, one at a time 
// Prevent user from skipping questions 
// Compare the user answer, and the correct answer to determine a score When all the questions are answered, 
// display the user score. 
// Allow the user to start a new game. 
// Use JavaScript objects to represent the questions. 
// Hint: You may want to store the question objects in an array