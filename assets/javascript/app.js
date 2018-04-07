var trivia = [
	{question:"What is the highest grossing movie of all time? (not taking in account inflation)",
		answer1:"Avatar(2009)",
		answer2:"Titanic(1997)",
		answer3:"Gone with the Wind(1939)",
		answer4:"Star Wars: The Force Awakens(2015)",
		correct:"Avatar(2009)",
		image: 'assets/images/avatar.jpg'
	},

	{question:"What is the most expensive movie production of all time?",
		answer1:"Justice League(2017)",
		answer2:"Avengers: Age of Ultron(2015)",
		answer3:"Pirates of the Carribean: On Stranger Tides(2011)",
		answer4:"John Carter(2012)",
		correct:"Pirates of the Carribean: On Stranger Tides(2011)",
		image:"assets/images/pirates.jpg" 
	},

	{question:"What is the highest grossing movie francise of all time?",
		answer1:"Harry Potter",
		answer2:"Star Wars",
		answer3:"Marvel Cinematic Universe",
		answer4:"James Bond",
		correct:"Marvel Cinematic Universe",
		image: "assets/images/mcu.jpg"
	},

	{question:"What is the highest grossing ANIMATED movie of all time?",
		answer1:"Toy Story 3(2010)",
		answer2:"Zootopia(2016)",
		answer3:"Frozen(2013)",
		answer4:"Minions(2015)",
		correct:"Frozen(2013)",
		image: "assets/images/frozen.jpg"
	},

	{question:"What is the highest grossing ANIME movie of all time?",
		answer1:"Spirited Away(2001)",
		answer2:"Pokemon: The First Movie(1999)",
		answer3:"Kimi no Nawa/Your Name(2016)",
		answer4:"Howl's Moving Castle(2004)",
		correct:"Kimi no Nawa/Your Name(2016)",
		image: "assets/images/kimi.jpg"
	},

	{question:"According to Rotten Tomatoes, what is the top rated movie of time? (Based off the Tomatometer Score)",
		answer1:"Get Out(2017)",
		answer2:"Citizen Kane(1941)",
		answer3:"Mad Max: Fury Road(2015)",
		answer4:"The Wizard of Oz(1939)",
		correct:"The Wizard of Oz(1939)",
		image: "assets/images/wizard.jpg"
	},

	{question:"Which of these movies is the biggest box office bomb? (had the highest net loss)",
		answer1:"John Carter(2012)",
		answer2:"King Arthur: Legend of the Sword (2017)",
		answer3:"Monster Trucks (2016)",
		answer4:"47 Ronin (2013)",
		correct:"King Arthur: Legend of the Sword (2017)",
		image: "assets/images/arthur.jpg"
	},

	{question:"What is the highest grossing movie documentry of All Time?",
		answer1:"Fahrenheit 9/11(2014)",
		answer2:"March of the Penguins (2005)",
		answer3:"Justin Bieber: Never Say Never (2011)",
		answer4:"Earth (2009)",
		correct:"Fahrenheight 9/11(2014)",
		image: "assets/images/fahrenheit.jpg"
	}
]


var time = 30;
var tick;
var timeup = false;
var int = 0;
var correctAns;
var right = 0;
var wrong = 0;
var audioCorrect= new Audio("assets/audio/correct.wav");
var audioWrong = new Audio("assets/audio/wrong.wav");
var audioNew = new Audio("assets/audio/new.wav");


$(".start").click(function(){
	audioNew.play();
	$(".start").hide();
	$(".score").hide();
	triviaQuestions();
	$(".answer").unbind('click').click(function(){
		selected = $(this).text();
		if (selected === correctAns){
			audioCorrect.play();
			right++;
			int++;
			clearInterval(tick);
			timeout();
			setTimeout(function(){reset(int)},5000);
		} else {
			audioWrong.play();
			wrong++;
			int++;
			clearInterval(tick);
			timeout();
			setTimeout(function(){reset(int)},5000);
		}
	})
})

function triviaQuestions(){
	$(".trivia").show();
	appender(int);
	timer()
}

function timer(){
	$("#time").html("<h3>"+"Time Remaining: " + time + " seconds" + "</h3>");
	tick = setInterval(function(){countdown()},1000);
}

function countdown(){
	time --;
	$("#time").html("<h3>"+"Time Remaining: " + time + " seconds" + "</h3>");
	if (time===0) {
		audioWrong.play();
		int++;
		wrong++;
		timeup=true;
		timeout();
		setTimeout(function(){reset(int)},5000);
	} 
}

function appender(arg){
		$("#correctanswer").empty();
		audioNew.play();
		$("#question").html("<h3>"+ trivia[arg].question+ "</h3>");
		$("#answer1").html("<h3>"+ trivia[arg].answer1+ "</h3>");
		$("#answer2").html("<h3>"+ trivia[arg].answer2+ "</h3>");
		$("#answer3").html("<h3>"+ trivia[arg].answer3+ "</h3>");
		$("#answer4").html("<h3>"+ trivia[arg].answer4+ "</h3>");
		correctAns = trivia[arg].correct;
		image = trivia[arg].image;
}

function reset(arg){
	if (int < 8) {
		clearInterval(tick);
		appender(arg);
		time = 30;
		timer();
		timeup = false;
	}  else if (int===8){
		clearInterval(tick);
		$(".trivia").hide();
		$("#correct").html("<h3>"+ "Total Correct: " + right + "</h3>");
		$("#wrong").html("<h3>"+ "Total Wrong: " + wrong + "</h3>");
		$(".start").show();
		$(".score").show();
		time = 30;
		int = 0;
		right = 0;
		wrong = 0;
		timeup = false;
	}

}

function timeout(){
	if (timeup===true){
		$("#correctanswer").html("<h3>"+ "The correct answer was: " + "<br>" + correctAns + "</h3>" + "<br>" + "<img src=" + image + " height='275px' width='200px'>");
		$("#question").html("<h3>"+ "Out of time!" + "</h3>");
		$("#answer1").empty();
		$("#answer2").empty();
		$("#answer3").empty();
		$("#answer4").empty();
	} else if (selected === correctAns){
		$("#correctanswer").html("<h3>"+ "You got it correct!" + "</h3>" + "<br>" + "<img src=" + image + " height='275px' width='200px'>")
		$("#answer1").empty();
		$("#answer2").empty();
		$("#answer3").empty();
		$("#answer4").empty();
	} else if (selected != correctAns){
		$("#correctanswer").html("<h3>"+ "The correct answer was: " + "<br>" + correctAns + "</h3>" + "<br>" + "<img src=" + image + " height='275px' width='200px'>");
		$("#answer1").empty();
		$("#answer2").empty();
		$("#answer3").empty();
		$("#answer4").empty();
	} 
}