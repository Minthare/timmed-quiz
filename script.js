var startbtn = document.getElementById('startbtn')
var timeEl = document.querySelector("#timer");
var messEl = document.querySelector("#message")
var main = document.getElementById('main')

var h1El = document.createElement("h1")
var btn1 = document.createElement("button")
var btn2 = document.createElement("button")
var btn3 = document.createElement("button")
var btn4 = document.createElement("button")
var questions = document.querySelector("#questions")
var seconds = 20
function displayQuestion(number,question,op1,op2,op3,op4)
{
    h1El.textContent = question
    btn1.textContent = op1
    btn2.textContent = op2
    btn3.textContent = op3
    btn4.textContent = op4
    
    questions.append(h1El,btn1,btn2,btn3,btn4)


    if(number === 1)//answer (D)
    {
        btn1.addEventListener('click',function(){
            seconds = seconds - 10;
            displayQuestion(2,"2) The correct sequence of HTML tags for starting a webpage is -","A. Head, Title, HTML, body","B. HTML, Body, Title, Head","C. HTML, Head, Title, Body","D. HTML, Head, Title, Body")
        })
        btn2.addEventListener('click',function(){
            seconds = seconds - 10;
            displayQuestion(2,"2) The correct sequence of HTML tags for starting a webpage is -","A. Head, Title, HTML, body","B. HTML, Body, Title, Head","C. HTML, Head, Title, Body","D. HTML, Head, Title, Body")
        })
        btn3.addEventListener('click',function(){
            seconds = seconds - 10;
            displayQuestion(2,"2) The correct sequence of HTML tags for starting a webpage is -","A. Head, Title, HTML, body","B. HTML, Body, Title, Head","C. HTML, Head, Title, Body","D. HTML, Head, Title, Body")
        })
        btn4.addEventListener('click',function(){
            displayQuestion(2,"2) The correct sequence of HTML tags for starting a webpage is -","A. Head, Title, HTML, body","B. HTML, Body, Title, Head","C. HTML, Head, Title, Body","D. HTML, Head, Title, Body")
        })
        }

    if(number === 2)//answer (C)
    {
        btn1.addEventListener('click',function(){
            seconds = seconds - 10;
            displayQuestion(3,"3) Which of the following element is responsible for making the text bold in HTML?","A. <pre>","B. <a>","C. <b>","D. <br>")
        })
        btn2.addEventListener('click',function(){
            seconds = seconds - 10;
            displayQuestion(3,"3) Which of the following element is responsible for making the text bold in HTML?","A. <pre>","B. <a>","C. <b>","D. <br>")
        })
        btn3.addEventListener('click',function(){
            displayQuestion(3,"3) Which of the following element is responsible for making the text bold in HTML?","A. <pre>","B. <a>","C. <b>","D. <br>")
        })
        btn4.addEventListener('click',function(){
            seconds = seconds - 10;
            displayQuestion(3,"3) Which of the following element is responsible for making the text bold in HTML?","A. <pre>","B. <a>","C. <b>","D. <br>")
        })
        }

        if(number === 3)//answer (B)
        {
            btn1.addEventListener('click',function(){
                seconds = seconds - 10;
                displayQuestion(4,"4) Which of the following tag is used for inserting the largest heading in HTML?","A. <h3>","B. <h1>","C. <h5>","D. <h6>")
            })
            btn2.addEventListener('click',function(){
                displayQuestion(4,"4) Which of the following tag is used for inserting the largest heading in HTML?","A. <h3>","B. <h1>","C. <h5>","D. <h6>")
            })
            btn3.addEventListener('click',function(){
                seconds = seconds - 10;
                displayQuestion(4,"4) Which of the following tag is used for inserting the largest heading in HTML?","A. <h3>","B. <h1>","C. <h5>","D. <h6>")
            })
            btn4.addEventListener('click',function(){
                seconds = seconds - 10;
                displayQuestion(4,"4) Which of the following tag is used for inserting the largest heading in HTML?","A. <h3>","B. <h1>","C. <h5>","D. <h6>")
            })
            }

            if(number === 4)//answer (D)
            {
                btn1.addEventListener('click',function(){
                    seconds = seconds - 10;
                    displayQuestion(5,"5) Which of the following methods can be used to display data in some form using Javascript?","A. document.write()","B. console.log","C. window.alert()","D. all of the above")
                })
                btn2.addEventListener('click',function(){
                    seconds = seconds - 10;
                    displayQuestion(5,"5) Which of the following methods can be used to display data in some form using Javascript?","A. document.write()","B. console.log","C. window.alert()","D. all of the above")
                })
                btn3.addEventListener('click',function(){
                    seconds = seconds - 10;
                    displayQuestion(5,"5) Which of the following methods can be used to display data in some form using Javascript?","A. document.write()","B. console.log","C. window.alert()","D. all of the above")
                })
                btn4.addEventListener('click',function(){
                    displayQuestion(5,"5) Which of the following methods can be used to display data in some form using Javascript?","A. document.write()","B. console.log","C. window.alert()","D. all of the above")
                })
                }

                if(number === 5) // answer (A)
                {
                    btn1.addEventListener('click',function(){
                        displayQuestion(6,"6) How to create an unordered list (a list with the list items in bullets) in HTML?","A. <ul>","B. <ol>","C. <li>","D. <i>")
                    })
                    btn2.addEventListener('click',function(){
                        seconds = seconds - 10;
                        displayQuestion(6,"6) How to create an unordered list (a list with the list items in bullets) in HTML?","A. <ul>","B. <ol>","C. <li>","D. <i>")
                    })
                    btn3.addEventListener('click',function(){
                        seconds = seconds - 10;
                        displayQuestion(6,"6) How to create an unordered list (a list with the list items in bullets) in HTML?","A. <ul>","B. <ol>","C. <li>","D. <i>")
                    })
                    btn4.addEventListener('click',function(){
                        seconds = seconds - 10;
                        displayQuestion(6,"6) How to create an unordered list (a list with the list items in bullets) in HTML?","A. <ul>","B. <ol>","C. <li>","D. <i>")
                    })
                    }

                    if(number === 6)//answer (C)
                    {
                        btn1.addEventListener('click',function(){
                            displayQuestion(7,"7) Which character is used to represent the closing of a tag in HTML?","A. #","B. :","C. /","D. !")
                        })
                        btn2.addEventListener('click',function(){
                            seconds = seconds - 10;
                            displayQuestion(7,"7) Which character is used to represent the closing of a tag in HTML?","A. #","B. :","C. /","D. !")
                        })
                        btn3.addEventListener('click',function(){
                            displayQuestion(7,"7) Which character is used to represent the closing of a tag in HTML?","A. #","B. :","C. /","D. !")
                        })
                        btn4.addEventListener('click',function(){
                            seconds = seconds - 10;
                            displayQuestion(7,"7) Which character is used to represent the closing of a tag in HTML?","A. #","B. :","C. /","D. !")
                        })
                        }

                        if(number === 7)// answer (C)
                        {
                            btn1.addEventListener('click',function(){
                                seconds = seconds - 10;
                                displayQuestion(8,"8) What are the types of unordered or bulleted list in HTML?","A. disc, square, triangle","B. polygon, triangle, circle","C. disc, circle, square","D. All of the above")
                            })
                            btn2.addEventListener('click',function(){
                                seconds = seconds - 10;
                                displayQuestion(8,"8) What are the types of unordered or bulleted list in HTML?","A. disc, square, triangle","B. polygon, triangle, circle","C. disc, circle, square","D. All of the above")
                            })
                            btn3.addEventListener('click',function(){
                                displayQuestion(8,"8) What are the types of unordered or bulleted list in HTML?","A. disc, square, triangle","B. polygon, triangle, circle","C. disc, circle, square","D. All of the above")
                            })
                            btn4.addEventListener('click',function(){
                                seconds = seconds - 10;
                                displayQuestion(8,"8) What are the types of unordered or bulleted list in HTML?","A. disc, square, triangle","B. polygon, triangle, circle","C. disc, circle, square","D. All of the above")
                            })
                            }

                            if(number === 8)// answer (A)
                            {
                                btn1.addEventListener('click',function(){
                                    displayQuestion(9,"9) Which of the following HTML attribute is used to define inline styles?","A. style","B. type","C. class","D. None of the above")
                                })
                                btn2.addEventListener('click',function(){
                                    seconds = seconds - 10;
                                    displayQuestion(9,"9) Which of the following HTML attribute is used to define inline styles?","A. style","B. type","C. class","D. None of the above")
                                })
                                btn3.addEventListener('click',function(){
                                    seconds = seconds - 10;
                                    displayQuestion(9,"9) Which of the following HTML attribute is used to define inline styles?","A. style","B. type","C. class","D. None of the above")
                                })
                                btn4.addEventListener('click',function(){
                                    seconds = seconds - 10;
                                    displayQuestion(9,"9) Which of the following HTML attribute is used to define inline styles?","A. style","B. type","C. class","D. None of the above")
                                })
                                }

                                if(number === 9)// answer (D)
                                {
                                    btn1.addEventListener('click',function(){
                                        seconds = seconds - 10;
                                        displayQuestion(10,"The correct sequence of HTML tags for starting a webpage is -","A. Head, Title, HTML, body","B. HTML, Body, Title, Head ","C. HTML, Head, Title, Body","D. HTML, Head, Title, Body")
                                    })
                                    btn2.addEventListener('click',function(){
                                        seconds = seconds - 10;
                                        displayQuestion(10,"The correct sequence of HTML tags for starting a webpage is -","A. Head, Title, HTML, body","B. HTML, Body, Title, Head ","C. HTML, Head, Title, Body","D. HTML, Head, Title, Body")
                                    })
                                    btn3.addEventListener('click',function(){
                                        seconds = seconds - 10;
                                        displayQuestion(10,"The correct sequence of HTML tags for starting a webpage is -","A. Head, Title, HTML, body","B. HTML, Body, Title, Head ","C. HTML, Head, Title, Body","D. HTML, Head, Title, Body")
                                    })
                                    btn4.addEventListener('click',function(){
                                        displayQuestion(10,"The correct sequence of HTML tags for starting a webpage is -","A. Head, Title, HTML, body","B. HTML, Body, Title, Head ","C. HTML, Head, Title, Body","D. HTML, Head, Title, Body")
                                    })
                                    }

                                    if(number === 10)
                                    {
                                        btn1.addEventListener('click',function(){
                                            seconds = seconds - 10;
                                            document.querySelector("#questions").innerHTML = "GAME OVER";
                                        })
                                        btn2.addEventListener('click',function(){
                                            seconds = seconds - 10;
                                            document.querySelector("#questions").innerHTML = "GAME OVER";
                                        })
                                        btn3.addEventListener('click',function(){
                                            seconds = seconds - 10;
                                            document.querySelector("#questions").innerHTML = "GAME OVER";
                                        })
                                        btn4.addEventListener('click',function(){
                                            seconds = seconds - 10;
                                            document.querySelector("#questions").innerHTML = "GAME OVER";
                                        })
                                        }
        


    













}
function startquiz(){
    main.removeChild(main.children[0]);
    main.removeChild(main.children[0]);
    main.removeChild(main.children[0]);

    console.log("hello world")
    var timeInterval = setInterval(function(){
    seconds-- ;
    timeEl.textContent = "Time : "+seconds;
    if(seconds === 0)
    {
        clearInterval(timeInterval);
        messEl.textContent = "game is over"
    }
}, 1000)
displayQuestion(1," HTML stands for -","A. HighText Machine Language","B. HyperText and links Markup Language","C. HyperText Markup Language","D. None of these")//answer (C)
}



startbtn.addEventListener('click',startquiz)