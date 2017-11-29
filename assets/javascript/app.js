var trivia = [
	{question:"What is the highest grossing movie of all time?",
		answer1:"Avatar(2009)",
		answer2:"Titanic(1997)",
		answer3:"Gone with the Wind(1939)",
		answer4:"Star Wars: The Force Awakens(2015)",
		correct:"Avatar"
	},

	{question:"What is the most expensive movie production of all time?",
		answer1:"Justice League(2017)",
		answer2:"Avengers: Age of Ultron(2015)",
		answer3:"Pirates of the Carribean: On Stranger Tides(2011)",
		answer4:"John Carter(2012)",
		correct:"Pirates of the Carribean: On Stranger Tides(2011)"
	},

	{question:"What is the highest grossing movie francise of all time?",
		answer1:"Harry Potter",
		answer2:"Star Wars",
		answer3:"Marvel Cinematic Universe",
		answer4:"James Bond",
		correct:"Marvel Cinematic Universe"
	},

	{question:"What is the highest grossing ANIMATED movie of all time?",
		answer1:"Toy Story 3(2010)",
		answer2:"Zootopia(2016)",
		answer3:"Frozen(2013)",
		answer4:"Minions(2015)",
		correct:"Frozen(2013)"
	},

	{question:"What is the highest grossing ANIME movie of all time?",
		answer1:"Spirited Away(2001)",
		answer2:"Pokemon: The First Movie(1999)",
		answer3:"Kimi no Nawa/Your Name(2016)",
		answer4:"Howl's Moving Castle(2004)",
		correct:"Kimi no Nawa/Your Name(2016)"
	},

	{question:"According to Rotten Tomatoes, what is the top rated movie of time? (Based off the Tomatometer Score)",
		answer1:"Get Out(2017)",
		answer2:"Citizen Kane(1941)",
		answer3:"Mad Max: Fury Road(2015)",
		answer4:"The Wizard of Oz(1939)",
		correct:"The Wizard of Oz(1939)"
	},

	{question:"Which of these movies is the biggest box office bomb? (had the highest net loss)",
		answer1:"John Carter(2012)",
		answer2:"King Arthur: Legend of the Sword (2017)",
		answer3:"Monster Trucks (2016)",
		answer4:"47 Ronin (2013)",
		correct:"King Arthur: Legend of the Sword (2017)"
	},

	{question:"What is the highest movie documentry of All Time?",
		answer1:"Fahrenheight 9/11(2014)",
		answer2:"March of the Penguins (2005)",
		answer3:"Justin Bieber: Never Say Never (2011)",
		answer4:"Earth (2009)",
		correct:"Fahrenheight 9/11(2014)"
	}
	// question9:{
	// 	question:"What is the highest Grossing Movie of All Time? (Not adjusting for Inflation)",
	// 	answer1:"Avatar(2009)",
	// 	answer2:"Titanic(1997)",
	// 	answer3:"Gone with the Wind(1939)",
	// 	answer4:"Star Wars: The Force Awakens(2015)",
	// 	correct:"Avatar"
	// },
	// question10:{
	// 	question:"What is the highest Grossing Movie of All Time? (Not adjusting for Inflation)",
	// 	answer1:"Avatar(2009)",
	// 	answer2:"Titanic(1997)",
	// 	answer3:"Gone with the Wind(1939)",
	// 	answer4:"Star Wars: The Force Awakens(2015)",
	// 	correct:"Avatar"
	// },
]


var time = 30;
var tick;
var timeup = false;
var int = 1;

$(".start").click(function(){
	$(".start").hide();
	triviaQuestions();
})


//Use timeout to write every 30 seconds?
function triviaQuestions(){
	appender(0);
	timer()
	// for (var i = 1; i < 8; i++) {
	// 	if (timeup===false) {
	// 		$("#question").html("<h3>"+ trivia[i].question+ "</h3>");
	// 		$("#answer1").html("<h3>"+ trivia[i].answer1+ "</h3>");
	// 		$("#answer2").html("<h3>"+ trivia[i].answer2+ "</h3>");
	// 		$("#answer3").html("<h3>"+ trivia[i].answer3+ "</h3>");
	// 		$("#answer4").html("<h3>"+ trivia[i].answer4+ "</h3>");
	// 	}
	// }
}

function timer(){
	$("#time").html("<h3>"+"Time Remaining: " + time + " seconds" + "</h3>");
	tick = setInterval(countdown,1000);
	int++;
}

function countdown(){
	time --;
	$("#time").html("<h3>"+"Time Remaining: " + time + " seconds" + "</h3>");
	if (time===0) {
		timeup=true;
		clearInterval(tick);
		time = 30;
		appender(int);
		timer()
	}
}

function appender(arg){
	$("#question").html("<h3>"+ trivia[arg].question+ "</h3>");
		$("#answer1").html("<h3>"+ trivia[arg].answer1+ "</h3>");
		$("#answer2").html("<h3>"+ trivia[arg].answer2+ "</h3>");
		$("#answer3").html("<h3>"+ trivia[arg].answer3+ "</h3>");
		$("#answer4").html("<h3>"+ trivia[arg].answer4+ "</h3>");
}