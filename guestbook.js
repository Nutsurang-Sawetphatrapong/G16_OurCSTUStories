const feedbackForm = document.getElementById("feedbackForm");
const emailInput = document.getElementById("emailInput");
const commentInput = document.getElementById("commentInput");
const feedbackSlide = document.getElementById("feedbackSlide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const Rateme = document.getElementsByName("rate_me");
const nameinput = document.getElementById("name");

let feedbacks = [];
let currentIndex = 0;
var error = document.createElement('div');



const showFeedback = (index) => {
    if (feedbacks.length === 0) {
        feedbackSlide.innerHTML = "<p>No feedback yet. Add one above!</p>";
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
      }
      const feedback = feedbacks[index];
      console.log(feedback.name);
      feedbackSlide.innerHTML = `
        <div class="feedback-card">
          <div class="feedback-content">${'★'.repeat(feedback.star)}</div>
          <div class="feedback-content">"${feedback.comment}"</div>
          <div class="feedback-author">— ${feedback.name}</div>
          <div class="feedback-author">${feedback.email}</div>
        </div>
      `;


      prevBtn.disabled = false;
      nextBtn.disabled = false;
    };

    const addFeedback = (email, comment,star,name) => {
      feedbacks.push({ email, comment ,star,name});
      currentIndex = feedbacks.length - 1; 
      showFeedback(currentIndex);

    };

    feedbackForm.addEventListener("submit", (o) => {
      o.preventDefault();
      let star = 0
      for (let i = 0;i<5;i++){
        if (Rateme[i].checked==true){
          star = parseInt(Rateme[i].value);
          console.log(star)
          break;
        }
      }
      const name = nameinput.value;
      const email = emailInput.value;
      const comment = commentInput.value;

      if (email && comment.length <= 100) {
        addFeedback(email,comment,star,name);
        nameinput.value = "";
        emailInput.value = "";
        commentInput.value = "";
        star = 0;
        // console.log(comment.length);
        error.innerHTML = '';
      }
      else{
        error.innerHTML = '<p id="error">Too long ,bro</p>';
        feedbackForm.appendChild(error);
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        showFeedback(currentIndex);
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < feedbacks.length - 1) {
        currentIndex++;
        showFeedback(currentIndex);
      }
    });
    
    showFeedback(currentIndex);