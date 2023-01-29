var startbtn = document.getElementById('start_btn')
var seconds = 151
var timeEl = document.querySelector("#time");
var messEl = document.querySelector("#message");
var main = document.getElementById('main');

var result = document.createElement("h4");
var scores = 0 
var scoresdisplay = document.querySelector("#scoresdisplay");
var scoresh2 = document.createElement("h2");
var input = document.createElement("input");
var submitbtn = document.createElement("button");
var gobackbtn = document.createElement("button");
var clear = document.createElement("button");
var questions = document.querySelector("#questions");
var highscores = document.querySelector("#highscores");

localStorage.setItem("All_Scores",JSON.stringify({}))

function Clear()
{
	localStorage.setItem("All_Scores",JSON.stringify({}));
	highscores.replaceChildren();
	var h1 = document.createElement("h1")
	h1.textContent = "Highscores List"
	highscores.appendChild(h1)
	gobackbtn.textContent = "Go Back"
	highscores.appendChild(gobackbtn)
	gobackbtn.addEventListener('click',FirstPage)
	

}
function ShowScores()
{
	scoresh2.textContent = "Your Final Score is : " + scores 
	input.type = "text";
	submitbtn.textContent = "Submit"
	scoresdisplay.append(scoresh2,input,submitbtn)
	submitbtn.addEventListener('click',SaveScores)


}
function SaveScores()
{
	name = input.value; //name = joshua
	scores_object = JSON.parse(localStorage.getItem("All_Scores"));
	scores_object[name] = scores
	localStorage.setItem("All_Scores",JSON.stringify(scores_object));

	scoresdisplay.replaceChildren()
	var h1 = document.createElement("h1")
	h1.textContent = "Highscores List"
	highscores.appendChild(h1)
	
	finallist = Object.entries(scores_object)
	console.log(finallist);

	for (var i = 0 ; i < finallist.length ; i++)
	{
		
		var span1 = document.createElement("span")
		span1.textContent = finallist[i][0] + " - "
		highscores.appendChild(span1);
		var span2 = document.createElement("span")
		span2.textContent = finallist[i][1]
		highscores.appendChild(span2);
		var h1 = document.createElement("h1")
		h1.textContent = ""
		highscores.appendChild(h1);


		
	}
	gobackbtn.textContent = "Go Back"
	clear.textContent = "Clear"
	highscores.appendChild(gobackbtn)
	highscores.appendChild(clear)
	gobackbtn.addEventListener('click',FirstPage)
	clear.addEventListener('click',Clear)


	
	
	
}



function displayQuestion(number,question,op1,op2,op3,op4)
{
	
	questions.replaceChildren()
	
	var h1El = document.createElement("h1");
	var br1 = document.createElement("br");
	var br2 = document.createElement("br");
	var br3 = document.createElement("br");
	var br4 = document.createElement("br");
	var btn1 = document.createElement("button");
	var btn2 = document.createElement("button");
	var btn3 = document.createElement("button");
	var btn4 = document.createElement("button");
	

	h1El.textContent = question
	btn1.textContent = op1
	btn2.textContent = op2
	btn3.textContent = op3
	btn4.textContent = op4

	questions.appendChild(h1El)
	questions.appendChild(btn1)
	questions.appendChild(br1)
	questions.appendChild(btn2)
	questions.appendChild(br2)
	questions.appendChild(btn3)
	questions.appendChild(br3)
	questions.appendChild(btn4)
	
	if (number === 1){
		btn1.addEventListener('click',function(){ 
		scores = scores + 10;
		result.textContent = " ";
		questions.appendChild(result);
		displayQuestion(2,"What is the correct HTML element for inserting a line break?","<break>","<lb>","<br>","<brr>");
	 })
		btn2.addEventListener('click',function(){
			console.log("button 2 pressed")
			seconds = seconds - 10
			result.textContent = "Wrong"
			questions.appendChild(result)
			
		})
		btn3.addEventListener('click',function(){
			console.log("button 3 pressed")
			seconds = seconds - 10;
			result.textContent = "Wrong"
			questions.appendChild(result)
			
		})
		btn4.addEventListener('click',function(){
			console.log("button 4 pressed")
			seconds = seconds - 10;
			result.textContent = "Wrong";
			questions.appendChild(result);
		})
	}

	if(number === 2)
	{
		console.log("Question 2")
		btn1.addEventListener('click',function(){
		seconds = seconds - 10;
		result.textContent = "Wrong"
		questions.appendChild(result)
	})
	btn2.addEventListener('click',function(){
		seconds = seconds - 10;
		result.textContent = "Wrong"
		questions.appendChild(result)
	})

	//btn3 is right answer for question2
	btn3.addEventListener('click',function(){
		scores = scores + 10
		displayQuestion(3,"Choose the correct HTML element to define important text","<i>","<strong>","<b>","<important>")
		result.textContent = " "
		questions.appendChild(result)
	})
	
	btn4.addEventListener('click',function(){
		seconds = seconds - 10;
		result.textContent = "Wrong"
		questions.appendChild(result)
	})
	
	}


	if(number === 3)
	{
		console.log("Question 3")
	btn1.addEventListener('click',function(){
		seconds = seconds - 10;
		result.textContent = "Wrong"
		questions.appendChild(result)
	})

	//btn2 is right answer for question3
	btn2.addEventListener('click',function(){
		scores = scores + 10
		displayQuestion(4,"Choose the correct HTML element to define emphasized text","<i>","<emphasized>","<italic>","<em>")
		result.textContent = " "
		questions.appendChild(result)
	})

	btn3.addEventListener('click',function(){
		seconds = seconds - 10;
		result.textContent = "Wrong"
		questions.appendChild(result)
	})

	
	
	btn4.addEventListener('click',function(){
		seconds = seconds - 10;
		result.textContent = "Wrong"
		questions.appendChild(result)
	})
	
	}


	if(number === 4)
	{
		console.log("Question 4")
	btn1.addEventListener('click',function(){
		seconds = seconds - 10;
		result.textContent = "Wrong"
		questions.appendChild(result)
	})
	btn2.addEventListener('click',function(){
		seconds = seconds - 10;
		result.textContent = "Wrong"
		questions.appendChild(result)
	})
	btn3.addEventListener('click',function(){
		seconds = seconds - 10;
		result.textContent = "Wrong"
		questions.appendChild(result)
	})
	//btn4 is right answer for question4
	btn4.addEventListener('click',function(){
		scores = scores + 10
		displayQuestion(5,"Which character is used to indicate an end tag?","/","<","*",">")
		result.textContent = " "
		questions.appendChild(result)
	})
	
	}

	if(number === 5)
	{
		console.log("Question 5")
		console.log(number)
		//btn1 is right answer for question5 after this game over
		btn1.addEventListener('click',function(){
		scores = scores + 10
		seconds = 0;
		result.textContent = " "
		questions.appendChild(result)
		questions.replaceChildren()
		ShowScores()
		

	})

	btn2.addEventListener('click',function(){
		result.textContent = "Wrong"
		questions.appendChild(result)
		
	})
	btn3.addEventListener('click',function(){
		result.textContent = "Wrong"
		questions.appendChild(result)
	
	})
	btn4.addEventListener('click',function(){
		result.textContent = "Wrong"
		questions.appendChild(result)
	})


	
	
	
	}

	
	

}


function StartQuiz()
{
	seconds = 60
	scores = 0
	console.log("Quiz started")
	main.replaceChildren();
	scoresdisplay.replaceChildren()
	messEl.textContent = " "
	

	var timeInterval = setInterval(function(){
		seconds-- ;

		timeEl.textContent = "Time : "+seconds;
		if(seconds === 0 || seconds < 0)
		{
			clearInterval(timeInterval);
			questions.replaceChildren();
			messEl.textContent = "Quiz is over"
			timeEl.textContent = "Time : 0";
			ShowScores()
			
		}


	},1000)
	displayQuestion(1,"Choose the correct HTML element for the largest heading:","<h1>","<head>","<heading>","<h6>")
}




function FirstPage()
{
	scoresdisplay.replaceChildren()
	questions.replaceChildren()
	highscores.replaceChildren()
	messEl.textContent = " "

	var h1 = document.createElement("h1")
	var h5 = document.createElement("h5")
	var startbtn = document.createElement("button")
	var main = document.querySelector("#main")
	h1.textContent = "HTML Quiz Challenge"
	h5.textContent = "Try to answer the following questions"
	startbtn.textContent = "Start"
	main.append(h1,h5,startbtn)
	startbtn.addEventListener('click',StartQuiz)


}

FirstPage()

