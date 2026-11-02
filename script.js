const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
const answers = document.querySelectorAll('.answer');
const result = document.querySelector('.quiz-result');
const reset = document.querySelector('.reset-quiz');
answers.forEach(button => button.addEventListener('click', () => {
  const correct = button.dataset.correct === 'true';
  button.classList.add(correct ? 'correct' : 'incorrect');
  answers.forEach(answer => { answer.disabled = true; if (answer.dataset.correct === 'true') answer.classList.add('correct'); });
  result.textContent = correct ? 'Correct. A separate call to a trusted number helps confirm the person is real.' : 'Not quite. AI can imitate voices. Call the person using a number you already trust.';
  reset.hidden = false;
}));
reset.addEventListener('click', () => {
  answers.forEach(answer => { answer.disabled = false; answer.classList.remove('correct', 'incorrect'); });
  result.textContent = 'Choose an answer to see why verification matters.';
  reset.hidden = true;
});
