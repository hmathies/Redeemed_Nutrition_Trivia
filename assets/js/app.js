 /*----when the page loads, the trivia div will be displayed with title and start button only*/
    $(document).ready(function() {
          var timeRemaining = 60;
          var timerId;
          var correct = 0;
          var incorrect = 0;
          var unanswered = 0; 
           
          $("#questionPage").hide();
          $("#resultsPage").hide();
      // when the button is clicked, load the trivia questions and begin countdown timer
          $('.btn').on("click", function() {
              $("#startPage").hide();
              $("#questionPage").show();
              run(); 
          });
          /*this function starts the timer*/
          function run() {
            timerId = setInterval(decrement, 1000);
          }
          /*this function has the timer count down*/
          function decrement(){
            timeRemaining--;
            $("#timer").html("<h3>" + "Time Remaining: " + timeRemaining + "</h3>"); 
            if (timeRemaining === 0 ) {
            checkAnswers();
            stop();
            } 
          }
        /*if the user clicks the submit button*/
          $('#nutritionForm').submit(function( event ) {
              console.log( "working" );
              event.preventDefault();
              checkAnswers();
              stop();
          });
      
            /*this function checks the answers and records them to the results page*/
          function checkAnswers(){
            var q1 = $("input[type='radio'][name='brand']:checked").val();
            var q2 = $("input[type='radio'][name='year']:checked").val();
            var q3 = $("input[type='radio'][name='product']:checked").val();
            var q4 = $("input[type='radio'][name='shake']:checked").val();
            var q5 = $("input[type='radio'][name='sell']:checked").val();
            var q6 = $("input[type='radio'][name='days']:checked").val();
            var q7 = $("input[type='radio'][name='exercise']:checked").val();
            
               $.each([ q1, q2, q3, q4, q5, q6, q7 ], function( index, value ) {
             if (value === 'right') {
               correct++;
               $("#correct").html("<h3>" + "Correct: " + correct + "</h3>");
               console.log('right: ' + $("#correct").html("<h3>" + "Correct: " + correct + "</h3>"));
             }
             else if (value == undefined) {
               unanswered++;
               $("#unanswered").html("<h3>" + "Unanswered: " + unanswered + "</h3>");
               console.log('unanswered: '+ unanswered);
             }
             else{
               incorrect++;
                $("#incorrect").html("<h3>" + "Incorrect: " + incorrect + "</h3>");
               console.log('incorrect: '+ incorrect);
              }
            });
           }

           function stop() {
              clearInterval(timerId);
              
              $("#resultsPage").show();
              $('#questionPage').hide();
               $('#startPage').hide();
              
              // timerId = setInterval(decrement, 1000);
              setTimeout(reset,1000*5);
              console.log(setTimeout);
           }
           
           function reset() {
              $('#startPage').show();
              $("#resultsPage").hide();
              // document.PotterForm.reset();
              clearInterval(timerId);
              console.log('working');
              // $('#questionPage').clear();
              timeRemaining = 60;
              timerId;
              correct = 0;
              incorrect = 0;
              unanswered = 0; 
            } 
    });