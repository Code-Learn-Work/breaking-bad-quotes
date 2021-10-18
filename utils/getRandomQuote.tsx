const quotes = require("../db/quotes");

const randomQuote: any = () =>
  quotes[Math.floor(Math.random() * quotes.length)];

module.exports = randomQuote;
