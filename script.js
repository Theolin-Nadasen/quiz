const quizData = [
    {
        question: "hoe oud is ek?",
        a: "12",
        b: "32",
        c: "23",
        d: "52",
        answer: "c"
    },
    {
        question: "wat is die kleur van my oog?",
        a: "blou",
        b: "rooi",
        c: "geel",
        d: "swart",
        answer: "d"
    },
    {
        question: "hoe laat is dit?",
        a: "13:00",
        b: "12:00",
        c: "15:00",
        d: "14:00",
        answer: "a"
    },
    {
        question: "wat het ek gedrink?",
        a: "water",
        b: "coke",
        c: "sprite",
        d: "coo-ee",
        answer: "d"
    },
    {
        question: "wat is my naam?",
        a: "joe",
        b: "steve",
        c: "theo",
        d: "bob",
        answer: "c"
    }
]

question = document.getElementById("question")

aText = document.getElementById("a-text")
bText = document.getElementById("b-text")
cText = document.getElementById("c-text")
dText = document.getElementById("d-text")

answerBtn = document.getElementById("answerBtn")

currentQuestion = 0

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion]
    question.textContent = currentQuizData.question

    aText.textContent = currentQuizData.a
    bText.textContent = currentQuizData.b
    cText.textContent = currentQuizData.c
    dText.textContent = currentQuizData.d
}

loadQuiz()

answerBtn.addEventListener("click",() => {
    currentQuestion++

    if( currentQuestion < (quizData.length ) ){
        loadQuiz()
    }else{
        alert("You Finished!")
    }
})