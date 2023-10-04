const faqQuestions = document.querySelectorAll('.texte-question');
faqQuestions.forEach(function(question) {
  question.addEventListener('click', function toggleFaq() {
    question.classList.toggle('texte-question-selection');
    question.nextElementSibling.classList.toggle('texte-reponse-selection');
    question.childNodes[3].classList.toggle('faq-coche-selection');
  })
})
