var numberList= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
function fill(){
    randomList=numberList.sort(() => Math.random() - 0.5);
    for (i = 0; i <25; i++) {
    var currentNumber = randomList[i];
    document.querySelectorAll('input')[i].setAttribute("value", currentNumber );
    document.getElementById('audio').volume=0.30;
    document.getElementById('audio').play();
    }
}
function insert(number){
    document.querySelectorAll('input')[number].setAttribute("class", 'btn2' );
}

function reset(){
    for (i = 0; i <25; i++) {
        var numberList= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        document.querySelectorAll('input')[i].setAttribute("value", numberList[i] );
        document.querySelectorAll('input')[i].setAttribute('class','btn');
        var audio= new Audio("");
        audio.play();
        }
}
