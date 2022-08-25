const showQns = document.getElementById("questions");

let quizList = {
  list: [
    {
      option: "same1",
      questions: "1 . What is the capital city of Nepal ?",
      answer: {
        a: "Kathmandu",
        b: "Butwal",
        c: "Pokhara",
        d: "JanakPur",
      },
      correctAns: "Kathmandu",
    },
    {
      option: "same2",
      questions: "2 . What is the capital city of India ?",
      answer: {
        a: "Delhi",
        b: "Butwal",
        c: "Pokhara",
        d: "JanakPur",
      },
      correctAns: "Delhi",
    },
    {
      option: "same3",
      questions: "3 . What is the capital city of USA ?",
      answer: {
        a: "New York",
        b: "Washington DC",
        c: "California",
        d: "Texas",
      },
      correctAns: "Washington DC",
    },
  ],
};

let data = quizList.list
  .map(
    (user) =>
      `
      <div class="listBox"> <span class = "qnshead"> ${user.questions} </span> <div class="anslist">
      <span><input type='radio' name=${user.option} value=${user.answer.a}> ${user.answer.a}  </span>
      <span> <input type='radio' name=${user.option} value=${user.answer.a}> ${user.answer.b}  </span>
      <span> <input type='radio' name=${user.option} value=${user.answer.a}> ${user.answer.c}   </span>
        <span> <input type='radio' name=${user.option} value=${user.answer.a}> ${user.answer.d}   </span>
     
      </div> 
      </div>
      `
  )
  .join(" ");

showQns.innerHTML = data;

let ask = prompt("Enter your age");
switch (ask) {
  case ask < 18:
    alert("you are elder");
    break;
  case null:
    alert("enter any value");
    break;
  default:
    alert("you are younger");
    break;
}
