/**
 * FileName: app.js
 * 
 * @author Satnam Singh
 * StudentID: 300875942
 * @date June 9, 2016
 * 
 * git hub:https://github.com/Satnam1313/Assignment-Mini-Portfolio-Contact-Page
 * website:http://assignment-mini-portfolio-extended.azurewebsites.net/
 * @description: This file icontaing the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
   
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    paragraphElements[3] = document.getElementById("paragraphFour");

 // create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
 // check the existence sendButton 
    if(sendButton) {
        // event listener
        sendButton.addEventListener("click", sendButtonClick);
    }
    
    
    // event handler function
    function sendButtonClick(event) {
        console.log("clicked!");
    }
    
    // create a reference to the firstName field
     var firstName = document.getElementById("firstName");
    
    // create a reference to the form
    var contactForm = document.getElementById("contactForm");
    
    
    if(contactForm) {
        // event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("submitted");
            showFormInput();
            contactForm.reset();
        });
    }
    
    /**
     * This function shows the input from each form field 
     * on the console
     * 
     * @method showFormInput
     * @return {void} 
     */
    function showFormInput() {
        console.log("++++++++++++++++++++++++++++++++");
        console.log("First Name: " + firstName.value);
        console.log("++++++++++++++++++++++++++++++++");
        console.log("++++++++++++++++++++++++++++++++");
        console.log("Last Name: " + lastName.value);
        console.log("++++++++++++++++++++++++++++++++");
        console.log("++++++++++++++++++++++++++++++++");
        console.log("Email ID: " + email.value);
        console.log("++++++++++++++++++++++++++++++++");
        console.log("++++++++++++++++++++++++++++++++");
        console.log("Contact Number: " + contactNumber.value);
        console.log("++++++++++++++++++++++++++++++++");  
        console.log("++++++++++++++++++++++++++++++++");
        console.log("Message: " + message.value);
        console.log("++++++++++++++++++++++++++++++++");      
    }
    
   
    // define your paragraphs array;
    var paragraphs = [];
      
        // data for my pages
    paragraphs[0] = "I am an international student and I am currently enrolled in the Software Engineering Tech. program at Centennial College. I am a person with a positive attitude, strong determination and good analytical skills. I have good verbal as well as writting skills. I have completed my Secondary Education from India. Through the program I have learned HTML/CSS,Microsoft-Office and Basics of C# language.I have lot of curiosity to learn JavaScript,Linux,System Analysis and Database Management.<br>My hobbies are:<br>1. Workout at gym.<br>2. Learning new things(of It World)<br>3. Love to explore new places.<br>4. Allways curious to know how thhings happerns around the world.";
    
    paragraphs[1] = "OR Gate project was first project of my life.In the beginning,I thought that it is impossible for me to complete beacuse every time I  was changing something to enhance it's functionality everthing was messed up.Then my Physics teacher helpedme to complete my project on time."+ "Overall, I enjoyed a lot while doing this project.";
    
    paragraphs[2]="Game project was a assignment of my elder brother. He was alone in this project and it was summer vacations so I decided to help him. "+"This project was totally different for me as I have no knowledge regarding the project(like its functionality, how it works etc). "+"My main work was to provide him company and ask him lots of question on about the project . While working in this project I understood that learning is continous process, and it could be gain from the small things.";
    
    paragraphs[3]="At first,this project seem to be very boring one. Nobody was interested in doing it and everyone gave up because  it seems to boring project. As this project was the competiotn between the schools at province level so our arts teacher motivated all students but only few agreed on it. "+"Everyone was putting their all efforts to give their best. From the beginning till completion of project everyone enjoyed. During the exhibition, our group preformed very well and we won second prize.   ";
     

    // check to see if paragraph one exists
    var paragraphElementsLength = paragraphElements.length;
    
    // if paragraph exists then populate each paragraph on the page
    for (var index = paragraphElementsLength; index >= 0; index--) {
        console.log(index);
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
    
    
   
    
})();