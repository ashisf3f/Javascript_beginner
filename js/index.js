const showQns = document.getElementById("questions");
const showAns = document.getElementById("answer");

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
      correctAns: "a",
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
      correctAns: "a",
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
      correctAns: "b",
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
handlesubmit = (e) => {
  alert("don't sneak my code");
};
