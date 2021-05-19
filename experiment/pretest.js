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
            question: "1. The plot of Log P Vs log T for anybody is at a temperature larger than the temperature of the surroundings will be:", ///// Write the question inside double quotes
            answers: {
                a: "Straight line", ///// Write the option 1 inside double quotes
                b: "parabolic", ///// Write the option 2 inside double quotes
                c: "hyperbolic", ///// Write the option 2 inside double quotes
                d: "elliptical", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. The slope of the standard plot between Log P Vs log T for anybody is at a temperature larger than the temperature of the surroundings is",  ///// Write the question inside double quotes
      answers: {
        a: "4.2",                  ///// Write the option 1 inside double quotes
        b: "4.0",                  ///// Write the option 2 inside double quotes
        c: "4.8", 
        d: "5.0",  },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

           {
      question: "3. If the power radiated from any source gets doubled then its absolute temperature will have been raised by",  ///// Write the question inside double quotes
      answers: {
        a: "2 times",                  ///// Write the option 1 inside double quotes
        b: "Less than 2 times",                  ///// Write the option 2 inside double quotes
        c: "Greater than 2 times", 
        d: "None of these",  },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
                           {
      question: "4. If the absolute temperature of anybody be raised to twice its value then by what amount its power radiated will be raised",  ///// Write the question inside double quotes
      answers: {
        a: "2 times",                  ///// Write the option 1 inside double quotes
        b: "4 times",                  ///// Write the option 2 inside double quotes
        c: "8 times",
        d: "16 times",},
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
                           {
      question: "5. Relation between rate of Energy Emission from any blackbody with its absolute Temperature according to Stefan’s Law is:",  ///// Write the question inside double quotes
      answers: {
        a: "E∝T<sup>3</sup> ",                  ///// Write the option 1 inside double quotes
        b: "E∝T<sup>2</sup>",                  ///// Write the option 2 inside double quotes
        c: "E∝T<sup>4</sup>",
        d: "E∝T<sup>5</sup>",},
      correctAnswer: "c"                ///// Write the correct option inside double quotes
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
