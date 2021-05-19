/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. The value of the current in the filament at T=800 K when applied potential difference is 5V:", ///// Write the question inside double quotes
            answers: {
                a: "0.2 A", ///// Write the option 1 inside double quotes
                b: "0.4 A", ///// Write the option 2 inside double quotes
                c: "0.6A", ///// Write the option 2 inside double quotes
                d: "0.8A", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Resistance of any conductor _______________ with increase in temperature",  ///// Write the question inside double quotes
      answers: {
        a: "Increases",                  ///// Write the option 1 inside double quotes
        b: "decreases",                  ///// Write the option 2 inside double quotes
        c: "remains constant",
        d: "none of these",
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
                         {
      question: "3. At what temperature of the filament the resistance of the filament becomes 6 times of its value at 0K?",  ///// Write the question inside double quotes
      answers: {
        a: "400K",                  ///// Write the option 1 inside double quotes
        b: "464K",                  ///// Write the option 2 inside double quotes
        c: "470K",
        d: "474K",
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
                         {
      question: "4. Value of R<sup>t</sup>/R<sup>0</sup> for 400 K lies on which range?",  ///// Write the question inside double quotes
      answers: {
        a: "1-2",                  ///// Write the option 1 inside double quotes
        b: "3-4",                  ///// Write the option 2 inside double quotes
        c: "5-6",
        d: "7-8",
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
                         {
      question: "5. Keeping Temperature constant how the rate of energy emission from anybody depends on increasing its surface area? ",  ///// Write the question inside double quotes
      answers: {
        a: "Increases",                  ///// Write the option 1 inside double quotes
        b: "decreases",                  ///// Write the option 2 inside double quotes
        c: "remains constant",
        d: "none of these",
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
