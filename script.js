var startbtn = document.getElementById('startbtn')
var timeEl = document.querySelector("#timer");
var seconds = 10
var messEl = document.querySelector("#message")
var main = document.getElementById('main')
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
        messEl.textcontent - "game is over"
    }
}, 1000)
}
startbtn.addEventListener('click',startquiz)