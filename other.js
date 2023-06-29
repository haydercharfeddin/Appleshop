var btn =document.getElementById('btn')
var output=document.getElementById('outputtext')

var number=[Math.floor(Math.random()*5)]

btn.addEventListener('click',function(){
    var input = document.getElementById('userInput').value;
    if(input===number){
         output.innerHTML = 'you guessed right, you have a discount on all devices !!!'
    }
    else {
         output.innerHTML = 'sorry you didnt get the discount'
    }

})