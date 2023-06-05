console.log('Hello World');

const container = document.getElementById('container');

const button = document.createElement('button');

button.innerText = 'Click me';
button.id = 'home-button';
button.className = 'primary-button';

container.appendChild(button);