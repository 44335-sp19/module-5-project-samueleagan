/* Module 5 Project Script File */

function showQuestion(array, question, index) {
    var newArray = array;
    var answer = prompt(question);
    var uppercaseAnswer = answer.toUpperCase();   
    var isCorrect;
    if (uppercaseAnswer === newArray[index].answer){
        alert("CORRECT");
        isCorrect = 1;
    }
    else {
        alert("INCORRECT CORRECT ANSWER: " + newArray[index].answer); 
        isCorrect = 0;
    }
    return isCorrect;
}

var python = [{question: "TRUE OR FALSE: Python is compiled, rather than interpreted.", answer: "FALSE"},
              {question: "TRUE OR FALSE: Python shares many similarties to the C language.", answer: "FALSE"},
              {question: "TRUE OR FALSE: Python can be run on almost any operating system.", answer: "TRUE"}];

var java =   [{question: "TRUE OR FALSE: Java is complied, rather than interpreted.", answer: "TRUE"},
              {question: "TRUE OR FALSE: Java is a untyped programming language, like JavaScript.", answer: "FALSE"},
              {question: "TRUE OR FALSE: Java is used on over 3 billion devices around the world.", answer: "TRUE"}];

var javascript = [{question: "TRUE OR FALSE: JavaScript and Java are the same language with different names.", answer: "FALSE"},
                  {question: "TRUE OR FALSE: JavaScript is untyped typed, like Python.", answer: "TRUE"},
                  {question: "TRUE OR FALSE: JavaScript must be complied like Java.", answer: "FALSE"}];


var score = 0;

$(document).ready(function() {

    $("#python1").click(function() {if (showQuestion(python, python[0].question, 0) == 1){
                                        score += 100; document.getElementById("score").innerHTML = "<h1> Score: " + score + "</h1>"};
                                    });
    $("#python2").click(function() {if (showQuestion(python, python[1].question, 1) == 1){
                                        score += 200; document.getElementById("score").innerHTML = "<h1> Score: " + score + "</h1>"
                                    }});
    $("#python3").click(function() {if (showQuestion(python, python[2].question, 2) == 1){
                                        score += 300; document.getElementById("score").innerHTML = "<h1> Score: " + score + "</h1>"
                                    }});
    $("#java1").click(function() {if (showQuestion(java, java[0].question, 0) == 1){
                                        score += 100; document.getElementById("score").innerHTML = "<h1> Score: " + score + "</h1>"
                                    }});
    $("#java2").click(function() {if (showQuestion(java, java[1].question, 1) == 1){
                                        score += 200; document.getElementById("score").innerHTML = "<h1> Score: " + score + "</h1>"
                                    }});
    $("#java3").click(function() {if (showQuestion(java, java[2].question, 2) == 1){
                                        score += 300; document.getElementById("score").innerHTML = "<h1> Score: " + score + "</h1>"
                                    }});
    $("#js1").click(function() {if (showQuestion(javascript, javascript[0].question, 0) == 1) {
                                    score += 100; document.getElementById("score").innerHTML = "<h1> Score: " + score + "</h1>"
                                }});
    $("#js2").click(function() {if (showQuestion(javascript, javascript[1].question, 1) == 1) {
                                    score += 200; document.getElementById("score").innerHTML = "<h1> Score: " + score + "</h1>"
                                }});
    $("#js3").click(function() {if (showQuestion(javascript, javascript[2].question, 2) == 1) {
                                    score += 300; document.getElementById("score").innerHTML = "<h1> Score: " + score + "</h1>"
                                }});

});
