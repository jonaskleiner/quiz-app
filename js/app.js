// when button is clicked, user's answer recorded
// when button is clicked, user moves to next section


function createQuestionHTML (questionData) {
	console.log("createQuestionHTML", questionData);
	console.log("value of first item in the array named answer is: ", questionData.answer[0]);
	return '<h1>Question ' + questionData.number + ' of 5</h1>' +
	 	   '<div class="quizImage"><img src="img/' + questionData.img.src + '" width="375" height="375" alt="' + questionData.img.alt + '"></div>' +
	 	   '<h2>' + questionData.prompt + '</h2>' +
	 	   '<div class="answers-wrap">' +
	 	   '<ul>' +
	 	   '<li class="answers">' + questionData.answer[0] + '<span class="radio-position"><input type="radio" name="' + questionData.name + '" value="' + questionData.value[0] + '"></span></li>' +
	 	   '<li class="answers">' + questionData.answer[1] + '<span class="radio-position"><input type="radio" name="' + questionData.name + '" value="' + questionData.value[1] + '"></span></li>' +
	 	   '<li class="answers">' + questionData.answer[2] + '<span class="radio-position"><input type="radio" name="' + questionData.name + '" value="' + questionData.value[2] + '"></span></li>' +
	 	   '<li class="answers">' + questionData.answer[3] + '<span class="radio-position"><input type="radio" name="' + questionData.name + '" value="' + questionData.value[3] + '"></span></li>' +
	 	   '<li class="answers">' + questionData.answer[4] + '<span class="radio-position"><input type="radio" name="' + questionData.name + '" value="' + questionData.value[4] + '"></span></li>' +
	 	   '</ul>' +
	 	   '</div>' +
	 	   '<button type="button" class="butt butt-orange">Continue</button>';

}

$(document).ready(function () {
	$("button").on("click", function () {
		console.log("click");
		var section = $(this).closest("section");
		section.prop("hidden", true);
		section.next().prop("hidden", false);
	});

	var questions = {
		question1: {
			number: 1,
			img: {
				src: "primary-colors.png",
				alt: "primary colors",
			},
			prompt: "Which colors are considered Primary colors?",
			answer: ["Cyan Magenta Yellow Black", "Blue Yellow Red", "Orange Black Purple Red", "Red Yellow Green", "Red Green Blue"],
			correctAnswer: "Red, Green, Blue",
			name: "primary-colors",
			value: ["CMYK", "BYR", "OBPR", "RYG", "RGB"],
		}, // close question1 object

		question2: {
			number: 2,
			img: {
				src: "marquee-tool.png",
				alt: "marquee tool",
			},
			prompt: "In Adobe Photoshop, what is the primary purpose of the marquee tool?",
			answer: ["Modify Colors", "Edit Type", "Select Pixels", "Flatten Layers", "Create a Border"],
			correctAnswer: "Select Pixels",
			name: "marquee-tool",
			value: ["Modify", "Edit", "Select", "Flatten", "Create"],
		}, // close question2 object

		question3: {}, // close question3 object
		question4: {}, // close question4 object
		question5: {}, // close question5 object 
	};
	
	$('#question1').html(createQuestionHTML (questions.question1));
	$('#question2').html(createQuestionHTML (questions.question2));

}); // close 'jQuery activate' function

// give radio buttons a name so they are grouped together


	// <section hidden id="question1">
	// 	<h1>Question 1 of 5</h1>
	// 	<div class="quizImage"><img src="img/primary-colors.png" width="375px" height="375px" alt="primary colors"></div>
	// 	<form id="ques1">
	// 		<h2>Which colors are considered Primary colors?</h2>
	// 		<div class="answers-wrap">
	// 			<ul>
	// 				<li class="answers">Cyan, Magenta, Yellow, Black <span class="radio-position"><input type="radio" name="primary-colors" value="CMYK"></span></li>
	// 				<li class="answers">Blue, Yellow, Red<span class="radio-position"><input type="radio" name="primary-colors" value="BYR"></span></li>
	// 				<li class="answers">Orange, Black, Purple, Red<span class="radio-position"><input type="radio" name="primary-colors" value="OBPR"></span></li>
	// 				<li class="answers">Red, Yellow, Green<span class="radio-position"><input type="radio" name="primary-colors" value="RYG"></span></li>
	// 				<li class="answers">Red, Green, Blue<span class="radio-position"><input type="radio" name="primary-colors" value="RGB"></span></li>
	// 			</ul>
	// 		</div>
	// 	</form>
	// 	<button type="button" class="butt butt-orange">Continue</button>
	// </section>

	// <section hidden id="question2">
	// 	<h1>Question 2 of 5</h1>
	// 	<div class="quizImage"><img src="img/marquee-tool.png" width="375px" height="375px" alt="marquee tool"></div>
	// 	<h2>In Adobe Photoshop, what is the primary purpose of the marquee tool?</h2>
	// 	<div class="answers-wrap">
	// 		<ul>
	// 			<li class="answers">Modify Colors <span class="radio-position"><input type="radio" name="marquee-tool" value="Modify"></span></li>
	// 			<li class="answers">Edit Type <span class="radio-position"><input type="radio" name="marquee-tool" value="Edit"></span></li>
	// 			<li class="answers">Select Pixels <span class="radio-position"><input type="radio" name="marquee-tool" value="Select"></span></li>
	// 			<li class="answers">Flatten Layers <span class="radio-position"><input type="radio" name="marquee-tool" value="Flatten"></span></li>
	// 			<li class="answers">Create a Border <span class="radio-position"><input type="radio" name="marquee-tool" value="Create"></span></li>
	// 		</ul>
	// 	</div>
	// 	<button type="button" class="butt butt-orange">Continue</button>
	// </section>


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




