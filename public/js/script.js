// === public/js/script.js ===
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('funBtn');
  const output = document.getElementById('output');

  const funFacts = [
   'JavaScript was created in just 10 days!',
    'Node.js uses the V8 JavaScript engine from Chrome.',
    "TailwindCSS is utility-first — meaning it’s super flexible!",
    'Express is minimal but powerful enough for full-stack apps.',
    'Fun fact: You’re reading this because someone clicked a button!',
    'HTML stands for HyperText Markup Language.',
    'CSS was first proposed by Håkon Wium Lie in 1994.',
    'JavaScript is not the same as Java.',
    'Tailwind lets you build custom UIs without writing custom CSS.',
    'Node.js is single-threaded and event-driven.',
    'React was developed by Facebook.',
    'Vue.js was created by Evan You, a former Google engineer.',
    'npm stands for Node Package Manager.',
    'The first website went live in 1991.',
    'MongoDB stores data as JSON-like documents.',
    'JSON stands for JavaScript Object Notation.',
    'Git was created by Linus Torvalds.',
    'GitHub was launched in 2008.',
    'VS Code is built using Electron, which is powered by Node.js.',
    'Tailwind encourages mobile-first design.',
    'In JavaScript, everything is an object — even functions.',
    'You can build full-stack apps using only JavaScript.',
    'Frontend frameworks like React and Vue use virtual DOMs.',
    'Backend in Node.js can handle thousands of connections.',
    'Async/Await makes asynchronous JavaScript easier to write.',
    'Node.js apps use event loops to handle I/O.',
    'The "use strict" directive helps catch common JavaScript bugs.',
    'JavaScript can run both in the browser and server.',
    'CSS Grid and Flexbox revolutionized responsive design.',
    'Tailwind has a plugin ecosystem to extend utilities.',
    'REST APIs use HTTP methods like GET, POST, PUT, DELETE.',
    'JSON is language-independent and human-readable.',
    'JavaScript arrays are objects with indexed keys.',
    'LocalStorage and SessionStorage store data in the browser.',
    'WebSockets provide real-time communication.',
    'Node.js was released in 2009.',
    'TypeScript is a superset of JavaScript.',
    'DOM stands for Document Object Model.',
    'HTML5 introduced semantic tags like <article> and <section>.',
    'Tailwind offers dark mode out of the box.',
    'Express middleware functions can run before API responses.',
    '404 means the resource was not found.',
    '500 means internal server error.',
    'SVGs are scalable and ideal for icons and illustrations.',
    'CORS issues are common in frontend-backend communication.',
    'AJAX allows data to be fetched without refreshing the page.',
    'A promise represents a value that may be available now or later.',
    'Node.js uses non-blocking I/O.',
    "Tailwind's utility classes follow a naming convention.",
    'Web development is a creative form of engineering!'
  ];

  btn.addEventListener('click', () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    output.textContent = randomFact;
  });
});