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
function displayQuestions(number,question,op1,op2,op3,op4)
{
    h1El.textContent = question
    btn1.textContent = op1
    btn2.textContent = op2
    btn3.textContent = op3
    btn4.textContent = op4
    
    questions.append(h1El,btn1,btn2,btn3,btn4)


    if(number === 1)
    {
        btn1.addEventListener('click',function(){
            displayQuestion(2,"Question2","A","B","C","D")
        })
        btn2.addEventListener('click',function(){
            seconds = seconds - 10;
            displayQuestion(2,"Question2","A","B","C","D")
        })
        btn3.addEventListener('click',function(){
            seconds = seconds - 10;
            displayQuestion(2,"Question2","A","B","C","D")
        })
        btn4.addEventListener('click',function(){
            seconds = seconds - 10;
            displayQuestion(2,"Question2","A","B","C","D")
        })
        }

    if(number === 2)
    {
        btn1.addEventListener('click',function(){
            displayQuestion(3,"Question2","A","B","C","D")
        })
        btn2.addEventListener('click',function(){
            seconds = seconds - 10;
            displayQuestion(3,"Question2","A","B","C","D")
        })
        btn3.addEventListener('click',function(){
            seconds = seconds - 10;
            displayQuestion(3,"Question2","A","B","C","D")
        })
        btn4.addEventListener('click',function(){
            seconds = seconds - 10;
            displayQuestion(3,"Question2","A","B","C","D")
        })
        }

        if(number === 3)
        {
            btn1.addEventListener('click',function(){
                displayQuestion(4,"Question2","A","B","C","D")
            })
            btn2.addEventListener('click',function(){
                seconds = seconds - 10;
                displayQuestion(4,"Question2","A","B","C","D")
            })
            btn3.addEventListener('click',function(){
                seconds = seconds - 10;
                displayQuestion(4,"Question2","A","B","C","D")
            })
            btn4.addEventListener('click',function(){
                seconds = seconds - 10;
                displayQuestion(4,"Question2","A","B","C","D")
            })
            }

            if(number === 4)
            {
                btn1.addEventListener('click',function(){
                    displayQuestion(5,"Question2","A","B","C","D")
                })
                btn2.addEventListener('click',function(){
                    seconds = seconds - 10;
                    displayQuestion(5,"Question2","A","B","C","D")
                })
                btn3.addEventListener('click',function(){
                    seconds = seconds - 10;
                    displayQuestion(5,"Question2","A","B","C","D")
                })
                btn4.addEventListener('click',function(){
                    seconds = seconds - 10;
                    displayQuestion(5,"Question2","A","B","C","D")
                })
                }

                if(number === 5)
                {
                    btn1.addEventListener('click',function(){
                        displayQuestion(6,"Question2","A","B","C","D")
                    })
                    btn2.addEventListener('click',function(){
                        seconds = seconds - 10;
                        displayQuestion(6,"Question2","A","B","C","D")
                    })
                    btn3.addEventListener('click',function(){
                        seconds = seconds - 10;
                        displayQuestion(6,"Question2","A","B","C","D")
                    })
                    btn4.addEventListener('click',function(){
                        seconds = seconds - 10;
                        displayQuestion(6,"Question2","A","B","C","D")
                    })
                    }

                    if(number === 6)
                    {
                        btn1.addEventListener('click',function(){
                            displayQuestion(7,"Question2","A","B","C","D")
                        })
                        btn2.addEventListener('click',function(){
                            seconds = seconds - 10;
                            displayQuestion(7,"Question2","A","B","C","D")
                        })
                        btn3.addEventListener('click',function(){
                            seconds = seconds - 10;
                            displayQuestion(7,"Question2","A","B","C","D")
                        })
                        btn4.addEventListener('click',function(){
                            seconds = seconds - 10;
                            displayQuestion(7,"Question2","A","B","C","D")
                        })
                        }

                        if(number === 7)
                        {
                            btn1.addEventListener('click',function(){
                                displayQuestion(8,"Question2","A","B","C","D")
                            })
                            btn2.addEventListener('click',function(){
                                seconds = seconds - 10;
                                displayQuestion(8,"Question2","A","B","C","D")
                            })
                            btn3.addEventListener('click',function(){
                                seconds = seconds - 10;
                                displayQuestion(8,"Question2","A","B","C","D")
                            })
                            btn4.addEventListener('click',function(){
                                seconds = seconds - 10;
                                displayQuestion(8,"Question2","A","B","C","D")
                            })
                            }

                            if(number === 8)
                            {
                                btn1.addEventListener('click',function(){
                                    displayQuestion(9,"Question2","A","B","C","D")
                                })
                                btn2.addEventListener('click',function(){
                                    seconds = seconds - 10;
                                    displayQuestion(9,"Question2","A","B","C","D")
                                })
                                btn3.addEventListener('click',function(){
                                    seconds = seconds - 10;
                                    displayQuestion(9,"Question2","A","B","C","D")
                                })
                                btn4.addEventListener('click',function(){
                                    seconds = seconds - 10;
                                    displayQuestion(9,"Question2","A","B","C","D")
                                })
                                }

                                if(number === 9)
                                {
                                    btn1.addEventListener('click',function(){
                                        displayQuestion(10,"Question2","A","B","C","D")
                                    })
                                    btn2.addEventListener('click',function(){
                                        seconds = seconds - 10;
                                        displayQuestion(10,"Question2","A","B","C","D")
                                    })
                                    btn3.addEventListener('click',function(){
                                        seconds = seconds - 10;
                                        displayQuestion(10,"Question2","A","B","C","D")
                                    })
                                    btn4.addEventListener('click',function(){
                                        seconds = seconds - 10;
                                        displayQuestion(10,"Question2","A","B","C","D")
                                    })
                                    }

                                    if(number === 10)
                                    {
                                        btn1.addEventListener('click',function(){
                                            displayQuestion(9,"Question2","A","B","C","D")
                                        })
                                        btn2.addEventListener('click',function(){
                                            seconds = seconds - 10;
                                            displayQuestion(9,"Question2","A","B","C","D")
                                        })
                                        btn3.addEventListener('click',function(){
                                            seconds = seconds - 10;
                                            displayQuestion(9,"Question2","A","B","C","D")
                                        })
                                        btn4.addEventListener('click',function(){
                                            seconds = seconds - 10;
                                            displayQuestion(9,"Question2","A","B","C","D")
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
displayQuestions(1,"question1","A","B","C","D")
}



startbtn.addEventListener('click',startquiz)