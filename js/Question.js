class Question {

  constructor() {
    this.title = createElement('h1')
    this.ty= createElement('h3')
    this.input1 = createInput("Enter Your Name Here");
    this.welcomeMessage = createElement("h2");
    this.q1 = createElement("h2");
    this.q2 = createElement("h2");
    this.q3 = createElement("h2");
    this.q4 = createElement("h2");
    this.q5 = createElement("h2");

    this.a1 = createElement("h2");
    this.a2 = createElement("h2");
    this.a3 = createElement("h2");
    this.a4 = createElement("h2");
    this.a5 = createElement("h2");

    this.q1a1 = createElement("h2");
    this.q1a2 = createElement("h2");
    this.q1a3 = createElement("h2");
    this.q1a4 = createElement("h2");

    this.q2a1 = createElement("h2");
    this.q2a2 = createElement("h2");
    this.q2a3 = createElement("h2");
    this.q2a4 = createElement("h2");

    this.q3a1 = createElement("h2");
    this.q3a2 = createElement("h2");
    this.q3a3 = createElement("h2");
    this.q3a4 = createElement("h2");

    this.q4a1 = createElement("h2");
    this.q4a2 = createElement("h2");
    this.q4a3 = createElement("h2");
    this.q4a4 = createElement("h2");

    this.q5a1 = createElement("h2");
    this.q5a2 = createElement("h2");
    this.q5a3 = createElement("h2");
    this.q5a4 = createElement("h2");
   //Create a input box to enter the number
   // this.input2 = createInput()

    this.button1 = createButton('NEXT>');
    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.message = createElement("h3")
    this.message = createElement("h4")
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.button1.hide();
    this.input2.hide();
    this.message.hide();
    this.welcomeMessage.hide();
    this.input3.hide();


  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(650, 0);
    


    //Create html() and position() for each question, input and answers.
    this.welcomeMessage.position(600,100)
    this.input1.position(650, 530);
    this.button.position(700, 600);
    this.button1.position(700, 600);
    this.q1.position(300,100);
    this.q1a1.position(300,130);
    this.q1a2.position(300,160);
    this.q1a3.position(300,190);
    this.q1a4.position(300,220);
    this.a1.position(600,500);
    this.ty.position(600,600)


    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
     this.input1.hide();
     this.button.hide();
     var message = `
      Welcome ${this.input1.value()}`;
      this.welcomeMessage.html(message);
      
      
    })
    this.button1.mousePressed(()=>{
    this.button1.hide();
    this.welcomeMessage.hide();
     //message
    var message1 = `
    1.How long is a day on Neptune?`;
      this.q1.html(message1);
      //options
      var message2 = `
      a. 15 hrs`;
      this.q1a1.html(message2);
      var message3 = `
      b. 17 hrs`;
      this.q1a2.html(message3);
      var message4 = `
      c. 16 hrs`;
      this.q1a3.html(message4);
      var message5 = `
      d. 24 hrs`;
      this.q1a4.html(message5);
      this.input2 = createInput("Enter Your Option Here");
      this.input2.position(300,290);
      this.button3 = createButton('Submit');
      this.button3.position(450,290);
      this.button3.mousePressed(()=>{
        var message6 = `
        The answer is c.16 Hrs `;
          this.a1.html(message6);
          var message7 = `
          Thankyou for playing`;
          this.ty.html(message7);
          this.button4.position(820,550);
          this.input2.hide();
          this.button3.hide();
          
        });
     
      })
      
     
    }
    
  }

