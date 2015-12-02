function createQuestionHTML (questionData) {
	console.log("createQuestionHTML", questionData);
	return '<h1>Question ' + questionData.number + ' of 5</h1>' +
	 	   '<div class="quizImage"><img src="img/' + questionData.img.src + '" width="375" height="375" alt="marquee tool"></div>';
}

$(document).ready(function () {
	$("button").on("click", function () {
		console.log("click");
		var section = $(this).closest("section");
		section.prop("hidden", true);
		section.next().prop("hidden", false);
	});

	var questions = {
		question1: "e",
		question2: {
			number: 2,
			img: {
				src: "marquee-tool.png",
				alt: "marquee tool",
			},
			prompt: "In Adobe Photoshop, what is the primary purpose of the marquee tool?",
			answer: ["Modify Colors", "Edit Type", "Select Pixels", "Flatten Layers", "Create a Border"],
			correctAnswer: "Select Pixels",
		},
		question3: "d",
		question4: "e",
		question5: "d"
	};
	
	$('#question2').html(createQuestionHTML (questions.question2));

	// $('#question3').html(createQuestionHTML (questions.question3));

}); // close 'jQuery activate' function

// give radio buttons a name so they are grouped together

 /* <section hidden id="question2">
		<h1>Question 2 of 5</h1>
		<div class="quizImage"><img src="img/marquee-tool.png" width="375px" height="375px" alt="marquee tool"></div>
		<h2>In Adobe Photoshop, what is the primary purpose of the marquee tool?</h2>
		<div class="answers-wrap">
			<ul>
				<li class="answers">Modify Colors <span class="check-box"><input type="checkbox"></span></li>
				<li class="answers">Edit Type <span class="check-box"><input type="checkbox"></span></li>
				<li class="answers">Select Pixels <span class="check-box"><input type="checkbox"></span></li>
				<li class="answers">Flatten Layers <span class="check-box"><input type="checkbox"></span></li>
				<li class="answers">Create a Border <span class="check-box"><input type="checkbox"></span></li>
			</ul>
		</div>
		<button type="button" class="butt butt-orange">Continue</button>
	</section> */

// denote correct answers
// tally score
// display score
// user to answer questions, one at a time 
// Prevent user from skipping questions 
// Compare the user answer, and the correct answer to determine a score When all the questions are answered 
// display the user score. 
// Allow the user to start a new game. 
// Use JavaScript objects to represent the questions. 
// Hint: You may want to store the question objects in an array 