function createQuestionHTML (questionData) {
	// console.log("createQuestionHTML", questionData);
	// console.log("value of first item in the array named answer is: ", questionData.answer[0]);
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
	 	   '<button type="button" class="butt butt-orange" name="proceed">Continue</button>';

}


$(document).ready(function () {

	// global vars
	var userCorrectAnswerCount;

	
	var questions = { // data for questions and multiple choice answers
		question1: {
			number: 1,
			img: {
				src: "primary-colors.png",
				alt: "primary colors",
			}, // close img object
			prompt: "Which colors are considered Primary colors?",
			answer: ["Cyan Magenta Yellow Black", "Blue Yellow Red", "Orange Black Purple Red", "Red Yellow Green", "Red Green Blue"],
			correctAnswer: "RGB",
			name: "primary-colors",
			value: ["CMYK", "BYR", "OBPR", "RYG", "RGB"],
		}, // close question1 object

		question2: {
			number: 2,
			img: {
				src: "marquee-tool.png",
				alt: "marquee tool",
			}, // close img object
			prompt: "In Adobe Photoshop, what is the primary purpose of the marquee tool?",
			answer: ["Modify Colors", "Edit Type", "Select Pixels", "Flatten Layers", "Create a Border"],
			correctAnswer: "Select",
			name: "marquee-tool",
			value: ["Modify", "Edit", "Select", "Flatten", "Create"],
		}, // close question2 object

		question3: {
			number: 3,
			img: {
				src: "print-colors.png",
				alt: "print color mode",
			}, // close img object
			prompt: "What is the appropriate color mode for a print ready color file?",
			answer: ["RGB", "Index Color", "Greyscale", "CMYK", "Duotone"],
			correctAnswer: "CMYK",
			name: "print-color",
			value: ["RGB", "Index", "Greyscale", "CMYK", "Duotone"],
		}, // close question3 object
		
		question4: {
			number: 4,
			img: {
				src: "vector.png",
				alt: "vector images",
			}, // close img object
			prompt: "The main advantage of the vector file format is?",
			answer: ["Infinite scaling", "Crisp image printing", "Small file size vs raster", "Transform doesn't degrade image", "All of the above"],
			correctAnswer: "All",
			name: "vector",
			value: ["Infinite", "Crisp", "Small", "Transform", "All"],
		}, // close question4 object
		
		question5: {
			number: 5,
			img: {
				src: "resolution.png",
				alt: "resolution",
			}, // close img object
			prompt: "What is the minimum recommended resolution for outputting a color image to print?",
			answer: ["72 dpi", "96 dpi", "150 dpi", "300 dpi", "600 dpi"],
			correctAnswer: "300",
			name: "resolution",
			value: ["72", "96", "150", "300", "600"],
		}, // close question5 object 
	}; // close questions object


	// button function
	$(document).on("click", "button", function () {
		var button = $(this);
		var section = button.closest("section");
		
		if ( button.attr('name') === 'begin') {
			console.log("beginning the game now");
			userCorrectAnswerCount = 0;
			console.log("user's score is ", userCorrectAnswerCount);
			section.prop("hidden", true); // hides previous section
			section.next().prop("hidden", false); // displays next section
			console.log("button clicked on: ", section);
			console.log("now viewing section: ", section.next());
		
		} else if ( button.attr('name') === 'reset') {
			console.log("resetting the game now");
			resetQuiz();
			// userCorrectAnswerCount = 0;
			section.prop("hidden", true); // hides previous section
			$('#intro').prop("hidden", false);
		
		} else if (section.find("input:checked").val() === undefined) {
			console.log("user needs to submit an answer");
			section.find('h2').append('<br /><span class = "red">Please select an answer to continue</span>');
		
		} else {
			tallyScore(section, questions[ section.attr( 'id' ) ].correctAnswer);
			$('#finalTally').html(finalGameTally);
			section.prop("hidden", true); // hides previous section
			section.next().prop("hidden", false); // displays next section
			console.log("button clicked on: ", section);
			console.log("now viewing section: ", section.next());
		}

		

	}); // close button function


 		// tally score function 
	function tallyScore(section, correctAnswer) {
		console.log(section, correctAnswer);
		console.log(section.find("input:checked").val(), section.find("input:checked"));

		// increment userCorrectAnswerCount to keep track of score
	 	if ( section.find("input:checked").val() === correctAnswer ) {
			userCorrectAnswerCount ++;
			console.log("correct answer, point added to score. total is: ", userCorrectAnswerCount);
		}

		else {
			console.log("incorrect answer. user's score is still: ", userCorrectAnswerCount);
		}
	} // close function
	
	$('#question1').html(createQuestionHTML (questions.question1));
	$('#question2').html(createQuestionHTML (questions.question2));
	$('#question3').html(createQuestionHTML (questions.question3));
	$('#question4').html(createQuestionHTML (questions.question4));
	$('#question5').html(createQuestionHTML (questions.question5));

	function finalGameTally () {
		var awards = ["Design Dreamer", "Future Designer", "Design Intern", "Budding Designer", "Design Brainiac", "Design Genius"];

		return 	'<h1>Time To Tally Up Your Answers!</h1>' +
				'<div class="quizImage"><img src="img/tally.png" width="375px" height="375px" alt="tally"></div>' +
				'<div class="answers-wrap">' +
				'<ul>' +
				'<li class="tally tally-result">' + awards[userCorrectAnswerCount] + '<span class="tally-icons"><i class="fa fa-trophy"></i></span></li>' +
				'</ul>' +
		 	    '</div>' +
		 	    '<h2>You got ' + userCorrectAnswerCount + ' out of 5 correct!</h2>' +
		 	    '<button type="button" class="butt butt-orange" name="reset">Play Again</button>';

	}

	function resetQuiz () {
		userCorrectAnswerCount = 0;
		console.log('game has been reset and the users new score is: ', userCorrectAnswerCount);
		$('#question1').html(createQuestionHTML (questions.question1));
		$('#question2').html(createQuestionHTML (questions.question2));
		$('#question3').html(createQuestionHTML (questions.question3));
		$('#question4').html(createQuestionHTML (questions.question4));
		$('#question5').html(createQuestionHTML (questions.question5));
	}

}); // close 'document.ready' function


/*

WORKING PARTS OF GAME SO FAR
--- Questions & Answers loaded onto screen
--- Button click moves user from question to question
--- Button click answer checked. If true then score incremented +1
--- Button click with no answer selected prompts user to answer
--- Running total answers correct is kept throughout game
--- Final Tally section displays total correct of 5
--- Final Tally section displays award level


NEXT STEPS

RESET FUNCTION
--- When button pressed on tally screen:
--- Game needs to 'reset' and start a new game

*/


