$( document ).on( "pagecreate", function() {
      $( "body > [data-role='panel']" ).panel();
      $( "body > [data-role='panel'] [data-role='listview']" ).listview();
                                           });

$( document ).one( "pageshow", function() {
      $( "body > [data-role='header']" ).toolbar();
      $( "body > [data-role='header'] [data-role='navbar']" ).navbar();
                                          });
$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'The main type of dengue mosquito is _____________?',
      'options': [
        'Tripteroides',
        'Mansonia',
        'Aedes aegypti',
        'Haemagogus',

      ],
      'correctIndex': 2,
      'correctResponse': 'Good job, that was obvious.',
      'incorrectResponse': 'Sorry your answer is wrong, the correct answer is: Aedes aegypti'
    },
    {
      'q': 'How is Dengue Fever spread?',
      'options': [
        'By Human to Human Contact',
        'By Mosquito Bites',
        'By Unhygienic Habits',
        'By Eating Unhealthy',

      ],
      'correctIndex': 1,
      'correctResponse': 'Good job, that was obvious.',
      'incorrectResponse': 'Sorry your answer is wrong, the correct answer is: Mosquito Bites'
    },
      {
      'q': 'How can you prevent the spread of Dengue Fever?',
      'options': [
        'Clearing Stagnant Water',
        'Wearing Face-Masks',
        'Do Not Have Any Physical Contact From Other People',
        'Covering Your Mouth When You Cough Or Sneeze'
      ],
      'correctIndex': 0,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Too bad, the correct answer is: Clearing Stagnant Water'
    },
      {
      'q': 'Which of the following is a symptom of Dengue Fever?',
      'options': [
        'Coughing Up Blood',
        'Hallucinations',
        'High Fever',
        'Increased Stress'
      ],
      'correctIndex': 2,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Too bad, the correct answer is: High Fever'
    },
      {
      'q': 'Which of the following is NOT a symptom of Dengue Fever?',
      'options': [
        'Loss of Appetite',
        'Sever Headache',
        'Severe Muscle and Joint Pains',
        'Loss of Hearing'
      ],
      'correctIndex': 3,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Too bad, the correct answer is: Loss of Hearing'
    },
      {
      'q': 'Which of the following is a cure for Dengue Fever?',
      'options': [
        'No Cure',
        'Aspirin',
        'Flu-Jabs',
        'Other Medicines such as Panadol'
      ],
      'correctIndex': 0,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Too bad, the correct answer is: No Cure'
    }
    ,
      {
      'q': 'How many days the entire aquatic cycle (from egg to adult) can occur?',
      'options': [
        '7-8',
        '14-20',
        '20-25',
        '30-35'
      ],
      'correctIndex': 0,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Sorry your answer is Wrong, the correct answer is: 7-8 days'
    }
     ,
      {
      'q': 'In around how many Countries is Dengue fever endemic?',
      'options': [
        '50',
        '70',
        '100',
        '150'
      ],
      'correctIndex': 2,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Sorry your answer is Wrong, the correct answer is: 100 Countries'
    }  ,
      {
      'q': 'To protect yourself, use _________________',
      'options': [
        'Insect repellent',
        'Mosquito nets',
        'Mosquito spray',
        'All of them'
      ],
      'correctIndex': 3,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Sorry your answer is Wrong, the correct answer is: All of them'
    }
  ]
});
/*******************END OF QUIZZ PART*****************************/
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       // app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
   /* receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }*/
};
