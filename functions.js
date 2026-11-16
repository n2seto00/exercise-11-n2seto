const button = document.getElementById('showAnswers')
const answers = document.querySelectorAll('.answer')

answers.forEach(answer => {
  answer.style.display = 'none'
})

button.addEventListener('click', () => {
  answers.forEach(answer => {
    answer.style.display = 'block'
  })
})