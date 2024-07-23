function decline(){
    alert("Question Declined");
}

let questions = [
   "who is your motivation",
   "what is your name",
   "who makes you happy",
   "what is your profession",
   "mention your favourite leader",
   "how many languages do you know",
   "who is your rolemodel",
   "what is your age",
   "what is your ambition",
   "who is your favourite person in the world"
]

function accept(){
   let question = document.querySelector("#in").value;
   question = question.toLowerCase();
   if(questions.includes(question)) window.alert("Your question accepted ");
   else window.alert("Your question is rejected Chief");
}
   