// 1. DOM Manipulation

// Select an element
const playersList = document.querySelector('#players');
// or document.getElementById('players')

// Insert some HTML
playersList.insertAdjacentHTML('beforeend', '<li class="green">Luke</li>');
playersList.insertAdjacentHTML('beforeend', '<li class="red">Anakin</li>');

// Select an element with a more advanced query
const anakin = document.querySelector('#players .red');
console.log(anakin.innerText);

const list = document.getElementById('fifa-wins');
// Select a collection of elements
const teams = list.querySelectorAll('li');

teams.forEach((team) => {
  console.log(team.innerText);
});

list.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');

const brasil = document.querySelector('#fifa-wins li');

// Add a class to an element
brasil.classList.add('red');

// Read an input value
const input = document.getElementById('email');
console.log(input.value);

// Read inner text, inner html, or an attribute
const homeLink = document.getElementById('home');
console.log(homeLink.innerText);
console.log(homeLink.innerHTML);
console.log(homeLink.attributes.href);

// Change the inner html
homeLink.innerHTML = 'Le Wagon <strong>rocks!</strong>'

// 2. Events

const romain = document.getElementById('romain');

romain.addEventListener('click', (event) => {
  console.log(event.currentTarget); // the target of this event is romain
})

const avatars = document.querySelectorAll('.avatar');

avatars.forEach((avatar) => {
  avatar.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('img-circle');
  });
});
