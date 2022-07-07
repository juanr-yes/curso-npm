const messages = [
  "John",
  "Albert",
  "Chrissy",
  "Alexa",
  "Monique",
  "Nancy",
  "Selma",
  "Irina"
];

const randomNames = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomNames };