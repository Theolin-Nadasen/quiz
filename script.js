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

// question at the top of quiz
let question = document.getElementById("question")

// label with answers on them for the radio buttons
let aText = document.getElementById("a-text")
let bText = document.getElementById("b-text")
let cText = document.getElementById("c-text")
let dText = document.getElementById("d-text")

// answer button at the bottom of quiz
let answerBtn = document.getElementById("answerBtn")

let currentQuestion = 0
let answer = undefined
let score = 0

// gets all radio buttons. everything with class of answer.
const answersEl = document.querySelectorAll(".answer")

// gets the selected answer from the radio boxes
function getSelected(){
    let checkedItem = undefined

    answersEl.forEach((answerEl) => {
        if(answerEl.checked){
            checkedItem = answerEl.id
        }
    })

    answer = checkedItem
}

// deselect all radio buttons
function deselectAll(){
    answersEl.forEach((answerEl) => {
        answerEl.checked = false
    })
}

// loads the quiz data into the html elements
function loadQuiz(){
    deselectAll()
    const currentQuizData = quizData[currentQuestion]
    question.textContent = currentQuizData.question

    aText.textContent = currentQuizData.a
    bText.textContent = currentQuizData.b
    cText.textContent = currentQuizData.c
    dText.textContent = currentQuizData.d
}

// loads the quiz the first time
loadQuiz()

answerBtn.addEventListener("click",() => {
    getSelected()

    // checks if answer is not undefined
    if(!answer){
        console.log("pick something!")
    }else{

            // checks if answer is correct
        if(answer == quizData[currentQuestion].answer){
            console.log("correct")
            score++
        }else{
            console.log("wrong answer")
        }


        // handles changing the question
        currentQuestion++

        if( currentQuestion < (quizData.length ) ){
            loadQuiz()
        }else{
            alert(`Score: ${score}`)
        }
    }
})